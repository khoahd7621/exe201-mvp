import { useCallback, useEffect, useMemo, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import { AppBar, Box, Grid, Stack, Toolbar, Typography } from "@mui/material";

import { Seo } from "~/common/components";
import useCountdown from "~/hooks/useCountdown";
import {
  LeaveQuizBtn,
  ListeningQuestionCard,
  QuizPanel,
  ResultModal,
  SubmitQuizBtn,
} from "~/modules/test/components";
import { ListExams } from "~/modules/test/datas/ExamData";
import { QuestionList } from "~/modules/test/datas/QuestionData";
import { ListTests } from "~/modules/test/datas/TestData";
import {
  Exam,
  ExamStructure,
  PartResult,
  SelectedQuestion,
  Test,
  TestResult,
} from "~/modules/test/models";
import { Question } from "~/modules/test/models/Question";
import AppRoutes from "~/router/AppRoutes";

export default function QuizPage() {
  const { examType, quizSlug } = useParams();
  const exam: Exam | undefined = ListExams.find((exam) => exam.slug === examType);
  const test: Test | undefined = ListTests.find((test) => test.slug === quizSlug);

  const examStructures: ExamStructure[] = useMemo(() => (exam ? exam.structures : []), [exam]);

  const [hours, minutes, seconds] = useCountdown(
    useMemo(
      () => examStructures.reduce((prev, curr) => (prev += curr.totalTime), 0) * 60000,
      [examStructures]
    )
  );

  const listQuestions: Question[] = useMemo(
    () => (test ? QuestionList.filter((question) => question.testId === test.id) : []),
    [test]
  );

  const [selectedQuestions, setSelectedQuestions] = useState<SelectedQuestion[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [openModalResult, setOpenModalResult] = useState(false);
  const [testResult, setTestResult] = useState<TestResult | null>(null);

  useEffect(() => {
    if (listQuestions.length > 0) {
      setSelectedQuestions(
        listQuestions.map((question) => {
          return {
            question: question,
            selectedAnswer: "",
          };
        })
      );
    }
  }, [listQuestions]);

  const handleFinishQuiz = useCallback(() => {
    setIsFinished(true);
    setOpenModalResult(true);

    const partResults: PartResult[] = [];
    let realScore = 0;
    examStructures.forEach((structure) => {
      const listSubQuestions: SelectedQuestion[] = selectedQuestions.filter(
        (selectedQuestion) => selectedQuestion.question.structureId === structure.id
      );
      let totalTrueAnswer = 0;
      listSubQuestions.forEach((selectedQuestion) => {
        if (selectedQuestion.selectedAnswer === selectedQuestion.question.answer) {
          totalTrueAnswer++;
          realScore += 5;
        }
      });
      partResults.push({
        id: structure.id,
        label: structure.hanyu,
        rate: listSubQuestions.length ? (totalTrueAnswer / listSubQuestions.length) * 100 : 0,
      });
    });
    setTestResult({
      id: 0,
      userId: 0,
      testId: test?.id as number,
      createdAt: new Date(),
      totalScore: selectedQuestions.length * 5,
      realScore,
      partResults,
    });
  }, [examStructures, selectedQuestions, test]);

  if (hours + minutes + seconds <= 0) {
    handleFinishQuiz();
  }

  if (!exam) {
    return <Navigate to={AppRoutes.test} />;
  }
  if (!test || test.examId !== exam.id) {
    return <Navigate to={`${AppRoutes.test}/${exam.slug}`} />;
  }

  let currentQuantityQuestion = 0;
  let previousQuantityQuestion = 0;
  return (
    <>
      <Seo
        data={{
          title: `Panda Hanyu | Làm Bài Thi`,
          description: `Panda Hanyu Làm Bài Thi`,
          url: `https://hanyu-chinesee-learning.vercel.app/${AppRoutes.test}/${exam.slug}/${test.slug}`,
          href: `${AppRoutes.test}/${exam.slug}/${test.slug}`,
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
              <LeaveQuizBtn examType={examType as string} isFinished={isFinished} />
            </Box>
            {!isFinished && (
              <Stack direction="row" spacing={3} alignItems="center" justifyContent="space-between">
                <Typography variant="body1" component="div">
                  {hours + minutes + seconds <= 0
                    ? "0 : 00 : 00"
                    : `${hours} : ${minutes} : ${seconds}`}
                </Typography>
                <SubmitQuizBtn handleFinishQuiz={handleFinishQuiz} />
              </Stack>
            )}
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
          <QuizPanel structures={examStructures} selectedQuestions={selectedQuestions} />
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
              const listSubQuestions: SelectedQuestion[] = selectedQuestions.filter(
                (selectedQuestion) => selectedQuestion.question.structureId === structure.id
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
                  {listSubQuestions.map((selectedQuestion) => {
                    if (structure.id == 1) {
                      return (
                        <ListeningQuestionCard
                          key={selectedQuestion.question.id}
                          index={++startQuestion}
                          question={selectedQuestion.question}
                          examStructure={structure}
                          selectedAnswer={selectedQuestion.selectedAnswer}
                          selectedQuestions={selectedQuestions}
                          setSelectedQuestions={setSelectedQuestions}
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

      {testResult !== null && (
        <ResultModal
          testResult={testResult}
          examType={examType as string}
          open={openModalResult}
          setOpen={setOpenModalResult}
        />
      )}
    </>
  );
}
