import { Box, Grid, Typography } from "@mui/material";
import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";

import { ListeningQuizCard, QuizPanel } from "~/modules/test/components";
import { ListExams } from "~/modules/test/datas/ExamData";
import { QuestionList } from "~/modules/test/datas/QuestionData";
import { ListTests } from "~/modules/test/datas/TestData";
import { Exam, ExamStructure, Test } from "~/modules/test/models";
import { Question } from "~/modules/test/models/Question";
import AppRoutes from "~/router/AppRoutes";

export default function QuizPage() {
  const { examType, quizSlug } = useParams();
  const exam: Exam | undefined = ListExams.find((exam) => exam.slug === examType);
  const test: Test | undefined = ListTests.find((test) => test.slug === quizSlug);

  const examStructures: ExamStructure[] = useMemo(() => (exam ? exam.structures : []), [exam]);

  const listQuestions: Question[] = useMemo(
    () => (test ? QuestionList.filter((question) => question.testId === test.id) : []),
    [test]
  );

  if (!exam) {
    return <Navigate to={AppRoutes.test} />;
  }
  if (!test || test.examId !== exam.id) {
    return <Navigate to={`${AppRoutes.test}/${exam.slug}`} />;
  }

  let currentQuantityQuestion = 0;
  let previousQuantityQuestion = 0;
  return (
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
        <QuizPanel structures={examStructures} questions={listQuestions} />
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
            const listSubQuestions: Question[] = listQuestions.filter(
              (question) => question.structureId === structure.id
            );
            let startQuestion = currentQuantityQuestion;
            previousQuantityQuestion = currentQuantityQuestion;
            currentQuantityQuestion += listSubQuestions.length;
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
                        第 {++previousQuantityQuestion}-{currentQuantityQuestion} 题:{" "}
                        {structure.id === 1 ? "请选出与所听内容一致的一项。" : ""}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                {listSubQuestions.map((question) => {
                  if (structure.id == 1) {
                    return (
                      <ListeningQuizCard
                        key={question.id}
                        index={++startQuestion}
                        question={question}
                        examStructure={structure}
                      />
                    );
                  } else return null;
                })}
              </Box>
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
}
