import { Box, Grid, Typography } from "@mui/material";

import { QuizCard } from ".";
import { ExamStructure } from "../../models";
import { ExamPart } from "../../models/ExamPart";
import { Question } from "../../models/Question";

type QuizSubPartProps = {
  index: number;
  previousQuantity: number;
  currentQuantity: number;
  listQuestions: Question[];
  examStructure: ExamStructure;
  examPart: ExamPart;
};

export default function QuizSubPart({
  index,
  listQuestions,
  previousQuantity,
  currentQuantity,
  examStructure,
  examPart,
}: QuizSubPartProps) {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Box
            sx={{
              backgroundColor: "#fabb72",
              padding: "5px 10px",
              borderTopRightRadius: "0.8rem",
            }}
          >
            <Typography variant="body1">第 {index} 部分</Typography>
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
              第 {++previousQuantity}-{currentQuantity} 题
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {listQuestions.map((question) => (
        <QuizCard
          key={question.id}
          question={question}
          examStructure={examStructure}
          examPart={examPart}
        />
      ))}
    </>
  );
}
