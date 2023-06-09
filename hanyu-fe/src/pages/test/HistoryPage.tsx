import { useLayoutEffect, useMemo, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import { toast } from "react-toastify";

import { Loading, Seo } from "~/common/components";
import testApi from "~/modules/test/apis/testApis";
import {
  ListeningQuestionCardResult,
  QuizPanelResult,
  ReadingQuestionCardResult,
} from "~/modules/test/components";
import { ListExams } from "~/modules/test/datas/ExamData";
import { QuestionList } from "~/modules/test/datas/QuestionData";
import { ListTests } from "~/modules/test/datas/TestData";
import {
  Exam,
  ExamStructure,
  SelectedQuestionResult,
  Test,
  TestResult,
} from "~/modules/test/models";
import { Question } from "~/modules/test/models/Question";
import AppRoutes from "~/router/AppRoutes";

export default function HistoryPage() {
  const navigate = useNavigate();
  const { examType, testResultId } = useParams();
  const exam: Exam | undefined = ListExams.find((exam) => exam.slug === examType);
  const examStructures: ExamStructure[] = useMemo(() => (exam ? exam.structures : []), [exam]);

  const [testResult, setTestResult] = useState<TestResult | undefined>(undefined);

  const test: Test | undefined = useMemo(
    () => (testResult ? ListTests.find((test) => test.id === testResult.testId) : undefined),
    [testResult]
  );
  const listQuestions: Question[] = useMemo(
    () => (test ? QuestionList.filter((question) => question.testId === test.id) : []),
    [test]
  );
  const [selectedQuestions, setSelectedQuestions] = useState<SelectedQuestionResult[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useLayoutEffect(() => {
    testApi
      .getTestResults()
      .then((res) => {
        const testResult = res.find((testResult) => `${testResult.id}` === testResultId);
        if (testResult) {
          setTestResult(testResult);
          setLoading(false);
        } else {
          toast.error("Bài kiểm tra không tồn tại!");
          navigate(`${AppRoutes.test}/${examType}`);
        }
      })
      .catch((err) => {
        console.log(err);
        navigate(`${AppRoutes.test}/${examType}`);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testResultId, examType]);

  useLayoutEffect(() => {
    if (testResult && listQuestions.length > 0) {
      setSelectedQuestions(
        listQuestions.map((question) => {
          const selectedAnswer = testResult.userAnswers.find(
            (answer) => answer.questionId === question.id
          );
          return {
            question: question,
            selectedAnswer: selectedAnswer ? selectedAnswer.answer : "",
            isCorrect: !!selectedAnswer && selectedAnswer.answer === question.answer,
            isSelected: !selectedAnswer || selectedAnswer.answer !== "",
          };
        })
      );
    }
  }, [listQuestions, testResult]);

  if (test && test.examId !== exam?.id) {
    toast.error("Bài kiểm tra không hợp lệ!");
    return <Navigate to={`${AppRoutes.test}/${examType}`} />;
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Seo
            data={{
              title: `Panda Hanyu | Lịch Sử Làm Bài`,
              description: `Panda Hanyu Lịch Sử Làm Bài`,
              url: `https://hanyu-chinesee-learning.vercel.app/${AppRoutes.test}/${examType}/history/${testResultId}`,
              href: `${AppRoutes.test}/${examType}/history/${testResultId}`,
              thumbnailUrl:
                "https://res.cloudinary.com/khoahd7621/image/upload/v1686117832/banner-2_fkf4w3.png",
            }}
          />

          <Box
            sx={{
              display: "flex",
              height: {
                xs: "56px",
                sm: "4rem",
              },
            }}
          >
            <AppBar component="nav">
              <Toolbar
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#000",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Button
                    startIcon={<ArrowBackOutlinedIcon />}
                    variant="text"
                    sx={{
                      color: "#fff",
                      "&:hover": {
                        color: "#ccc",
                        textDecoration: "underline",
                      },
                    }}
                    onClick={() => navigate(`${AppRoutes.test}/${examType}`)}
                  >
                    Quay lại
                  </Button>
                </Box>
              </Toolbar>
            </AppBar>
          </Box>

          <Grid
            container
            spacing={2}
            sx={{
              paddingLeft: {
                xs: "0px",
                md: "20px",
              },
            }}
          >
            {/* Left panel */}
            <Grid item xs={12} md={3} sx={{ position: "relative" }}>
              <QuizPanelResult
                structures={examStructures}
                selectedQuestions={selectedQuestions}
                examName={exam?.name || ""}
                testNo={test?.no || 0}
                time={testResult?.createdAt || new Date()}
                mark={testResult?.realScore || 0}
                percent={testResult?.partResults.reduce((prev, cur) => prev + cur.rate, 0) || 0}
              />
            </Grid>

            {/* Main panel */}
            <Grid
              item
              xs={12}
              md={9}
              sx={{
                maxHeight: {
                  xs: "unset",
                  md: "calc(100vh - 56px)",
                },
                overflowY: "auto",
              }}
            >
              <Box
                sx={{
                  padding: {
                    xs: "0px",
                    md: "24px 20px 0",
                  },
                }}
              >
                {/* Quiz part */}
                {examStructures.map((structure) => {
                  const listSubQuestions: SelectedQuestionResult[] = selectedQuestions.filter(
                    (selectedQuestion) => selectedQuestion.question.structureId === structure.id
                  );
                  let startQuestion = 0;
                  return (
                    <Box key={structure.id}>
                      <Grid container>
                        <Grid item xs={3}>
                          <Box
                            sx={{
                              backgroundColor: "#2d2d2d",
                              color: "#fff",
                              padding: "5px 10px",
                              borderTopLeftRadius: "0.8rem",
                              borderTopRightRadius: "0.8rem",
                            }}
                          >
                            <Typography variant="h6">{structure.hanyu}</Typography>
                          </Box>
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid item xs={12}>
                          <Box
                            sx={{
                              backgroundColor: "#75d5d9",
                              padding: "5px 10px",
                              borderTopRightRadius: "0.8rem",
                            }}
                          >
                            <Typography variant="body1">
                              第 1-{listSubQuestions.length} 题:{" "}
                              {structure.id === 1 ? "请选出与所听内容一致的一项。" : ""}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                      {listSubQuestions.map((selectedQuestion) => {
                        if (structure.id == 1) {
                          return (
                            <ListeningQuestionCardResult
                              key={selectedQuestion.question.id}
                              index={++startQuestion}
                              examStructure={structure}
                              selectedQuestion={selectedQuestion}
                            />
                          );
                        } else
                          return (
                            <ReadingQuestionCardResult
                              key={selectedQuestion.question.id}
                              index={++startQuestion}
                              selectedQuestion={selectedQuestion}
                            />
                          );
                      })}
                    </Box>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}
