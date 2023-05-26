import { Avatar, Box, Stack, Typography } from "@mui/material";

import { ExamStructure } from "../../models";
import { Question } from "../../models/Question";

type QuizPanelProps = {
  structures: ExamStructure[];
  questions: Question[];
};

export default function QuizPanel({ structures, questions }: QuizPanelProps) {
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
                {questions
                  .filter((question) => question.structureId === structure.id)
                  .map((question) => (
                    <Avatar
                      key={question.id}
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
                        "&:active": {
                          backgroundColor: "#3965c9",
                          color: "#fff",
                        },
                      }}
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
