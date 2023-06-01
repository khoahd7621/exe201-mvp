import { useCallback } from "react";

import { Avatar, Box, Stack, Typography } from "@mui/material";

import { ExamStructure, SelectedQuestion } from "../../models";

type QuizPanelProps = {
  structures: ExamStructure[];
  selectedQuestions: SelectedQuestion[];
};

export default function QuizPanel({ structures, selectedQuestions }: QuizPanelProps) {
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
                        "&.active": {
                          backgroundColor: "#3965c9",
                          color: "#fff",
                        },
                      }}
                      className={selectedQuestion.selectedAnswer ? "active" : ""}
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
