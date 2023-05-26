import { Box, Grid, Typography } from "@mui/material";
import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";

import { QuizPanel, QuizSubPart } from "~/modules/test/components";
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

  const listQuestions: Question[] = useMemo(() => {
    const listQuestionsTmp: Question[] = [];
    examStructures.forEach((structure) => {
      structure.parts.forEach((part) => {
        QuestionList.forEach((question) => {
          if (question.partId === part.id) {
            listQuestionsTmp.push(question);
          }
        });
      });
    });
    return listQuestionsTmp;
  }, [examStructures]);

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
            let count = 0;
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

                {structure.parts.map((part) => {
                  const listSubQuestions: Question[] = listQuestions.filter(
                    (question) => question.partId === part.id
                  );
                  previousQuantityQuestion = currentQuantityQuestion;
                  currentQuantityQuestion += listSubQuestions.length;

                  if (listSubQuestions.length === 0) return null;

                  return (
                    <QuizSubPart
                      key={part.id}
                      index={++count}
                      listQuestions={listSubQuestions}
                      currentQuantity={currentQuantityQuestion}
                      previousQuantity={previousQuantityQuestion}
                      examStructure={structure}
                      examPart={part}
                    />
                  );
                })}
              </Box>
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
}
