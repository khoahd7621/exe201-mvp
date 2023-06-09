import { useCallback } from "react";

import { Avatar, Box, CardMedia, Grid, Stack, Typography } from "@mui/material";

import img from "~/assets/images/modules/test/banner/HSK_01.png";
import { ExamStructure, SelectedQuestionResult } from "../../models";

type Props = {
  structures: ExamStructure[];
  selectedQuestions: SelectedQuestionResult[];
  examName: string;
  testNo: number;
  time: Date;
  mark: number;
  percent: number;
};

export default function QuizPanelResult({
  structures,
  selectedQuestions,
  examName,
  testNo,
  time,
  mark,
  percent,
}: Props) {
  const scrollToQuestion = useCallback((questionId: number) => {
    const questionElement = document.getElementById(`question-${questionId}`);
    if (questionElement) {
      questionElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  }, []);

  return (
    <Box
      component="div"
      sx={{
        position: {
          xs: "unset",
          md: "absolute",
        },
        top: "40px",
        bottom: 0,
        width: "100%",
        backgroundColor: "#fff",
        padding: "20px",
        overflowY: "auto",
      }}
    >
      <Stack gap={4}>
        <Stack spacing={2}>
          <Typography variant="h6" textAlign="center" fontWeight="bold">
            Đề số: {examName} - HSK {testNo}
          </Typography>
          <Typography variant="body2" textAlign="center">
            Thời gian: {new Date(time).toLocaleString("vi-VN")}
          </Typography>
          <Stack direction="row" justifyContent="center">
            <CardMedia
              component="img"
              image={img}
              alt="Question image"
              sx={{
                width: {
                  xs: "90px",
                  sm: "120px",
                },
                height: {
                  xs: "90px",
                  sm: "120px",
                },
              }}
            />
          </Stack>
          <Grid container>
            <Grid item xs={4}>
              <Stack>
                <Typography variant="body2" textAlign="center" fontWeight="bold">
                  Câu hỏi
                </Typography>
                <Typography variant="body2" textAlign="center" fontWeight="bold">
                  {selectedQuestions.length}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack>
                <Typography variant="body2" textAlign="center" fontWeight="bold">
                  Chính xác
                </Typography>
                <Typography variant="body2" textAlign="center" fontWeight="bold">
                  {percent}%
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack>
                <Typography variant="body2" textAlign="center" fontWeight="bold">
                  Điểm
                </Typography>
                <Typography variant="body2" textAlign="center" fontWeight="bold">
                  {mark}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>

        {structures.map((structure) => {
          let count = 0;
          return (
            <Box key={structure.id}>
              <Typography variant="h6" textAlign="center">
                {structure.hanyu}
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={2} sx={{ marginTop: "20px" }}>
                {selectedQuestions
                  .filter(
                    (selectedQuestion) => selectedQuestion.question.structureId === structure.id
                  )
                  .map((selectedQuestion) => (
                    <Avatar
                      key={selectedQuestion.question.id}
                      children={++count}
                      sx={{
                        width: "35px",
                        height: "35px",
                        fontSize: "1rem",
                        background: "#fff",
                        color: "#000",
                        border: "1px solid #ccc",
                        cursor: "pointer",
                        "&:hover": {
                          borderColor: "#3965c9",
                        },
                        "&.true": {
                          backgroundColor: "#4caf50",
                          color: "#fff",
                        },
                        "&.false": {
                          backgroundColor: "#f44336",
                          color: "#fff",
                        },
                      }}
                      className={selectedQuestion.isCorrect ? "true" : "false"}
                      onClick={() => scrollToQuestion(selectedQuestion.question.id)}
                    />
                  ))}
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}
