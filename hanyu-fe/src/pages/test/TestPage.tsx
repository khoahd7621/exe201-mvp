import { Navigate, useParams } from "react-router-dom";

import { Box, Container, Grid } from "@mui/material";

import { Seo } from "~/common/components";
import { ExamStructure, TestCard } from "~/modules/test/components";
import { ListExams } from "~/modules/test/datas/ExamData";
import { ListTests } from "~/modules/test/datas/TestData";
import { Test } from "~/modules/test/models";
import { Exam } from "~/modules/test/models/Exam";
import AppRoutes from "~/router/AppRoutes";

export default function TestPage() {
  const { examType } = useParams();

  const currentExam: Exam | undefined = ListExams.find((item) => item.slug === examType);

  if (!currentExam) {
    return <Navigate to={AppRoutes.test} />;
  }

  const listTests: Test[] = ListTests.filter((item) => item.examId === currentExam.id);

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
                {listTests.map((test, index) => (
                  <TestCard
                    key={test.id}
                    examSlug={currentExam.slug}
                    test={test}
                    isLocked={examType !== "hsk-1" ? true : index !== 0}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
