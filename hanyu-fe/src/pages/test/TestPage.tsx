import { useEffect, useMemo, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import { Box, Container, Grid } from "@mui/material";

import { Seo } from "~/common/components";
import testApi from "~/modules/test/apis/testApis";
import { ExamStructure, TestCard, TestResultCard } from "~/modules/test/components";
import { ListExams } from "~/modules/test/datas/ExamData";
import { ListTests } from "~/modules/test/datas/TestData";
import { Test, TestResult } from "~/modules/test/models";
import { Exam } from "~/modules/test/models/Exam";
import { useAppSelector } from "~/redux/hooks";
import AppRoutes from "~/router/AppRoutes";

export default function TestPage() {
  const { examType } = useParams();
  const auth = useAppSelector((state) => state.auth);
  const user = useAppSelector((state) => state.profile.user);

  const currentExam: Exam | undefined = ListExams.find((item) => item.slug === examType);

  const listTests: Test[] = useMemo(
    () => (currentExam ? ListTests.filter((item) => item.examId === currentExam.id) : []),
    [currentExam]
  );

  const [testResult, setTestResult] = useState<TestResult[]>([]);

  useEffect(() => {
    if (auth.isAuthenticated) {
      testApi
        .getTestResults()
        .then((res) => setTestResult(res))
        .catch((err) => console.log(err));
    }
  }, [auth]);

  if (!currentExam) {
    return <Navigate to={AppRoutes.test} />;
  }

  return (
    <>
      <Seo
        data={{
          title: `Panda Hanyu | Bài Thi ${currentExam.name}`,
          description: `Panda Hanyu Bài Thi ${currentExam.name}`,
          url: `https://hanyu-chinesee-learning.vercel.app/${AppRoutes.test}/${currentExam.slug}`,
          href: `${AppRoutes.test}/${currentExam.slug}`,
          thumbnailUrl:
            "https://res.cloudinary.com/khoahd7621/image/upload/v1686117832/banner-2_fkf4w3.png",
        }}
      />

      <Container fixed>
        <Box>
          <Grid container spacing={2} paddingTop={4} paddingBottom={6}>
            <Grid item xs={12} md={3}>
              <ExamStructure examName={currentExam.name} structures={currentExam.structures} />
            </Grid>
            <Grid item xs={12} md={9}>
              <Grid spacing={2} container>
                {listTests.map((test) => {
                  if (testResult.length > 0) {
                    const testResultOfTest = testResult.filter((item) => item.testId === test.id);

                    if (testResultOfTest.length > 0)
                      return (
                        <TestResultCard
                          key={test.id}
                          examSlug={currentExam.slug}
                          test={test}
                          testResults={testResultOfTest}
                        />
                      );
                  }

                  return (
                    <TestCard
                      key={test.id}
                      examSlug={currentExam.slug}
                      test={test}
                      isLocked={test.isPremium && !user.isSubscribed}
                    />
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
