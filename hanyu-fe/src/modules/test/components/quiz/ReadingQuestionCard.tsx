import { Avatar, Button, Card, CardContent, Grid, Stack, Typography } from "@mui/material";

import { SelectedQuestion } from "../../models";
import { Question } from "../../models/Question";

type ReadingQuestionCardProps = {
  index: number;
  question: Question;
  selectedAnswer: string;
  selectedQuestions: SelectedQuestion[];
  setSelectedQuestions: (selectedQuestions: SelectedQuestion[]) => void;
};

export default function ReadingQuestionCard({
  index,
  question,
  selectedAnswer,
  selectedQuestions,
  setSelectedQuestions,
}: ReadingQuestionCardProps) {
  const handleSelectQuestion = (option: string) => {
    const selectedQuestionsJsonStr = JSON.stringify(selectedQuestions);
    const tmpSelectedQuestions = JSON.parse(selectedQuestionsJsonStr);

    for (let i = 0; i < tmpSelectedQuestions.length; i++) {
      const item = tmpSelectedQuestions[i];
      if (item.question.id === question.id) {
        if (item.selectedAnswer !== option) {
          item.selectedAnswer = option;
          setSelectedQuestions(tmpSelectedQuestions);
          break;
        }
      }
    }
  };

  return (
    <Card
      id={`question-${question.id}`}
      variant="outlined"
      sx={{ margin: "1rem 0", borderRadius: "0.6rem" }}
    >
      <CardContent sx={{ padding: "16px !important" }}>
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          alignItems="flex-start"
          gap={2}
          marginBottom={2}
        >
          <Avatar
            children={index}
            sx={{
              width: "35px",
              height: "35px",
              fontSize: "1rem",
              background: "#fff",
              color: "#000",
              border: "1px solid #ccc",
            }}
          />

          <Typography variant="body1" fontWeight="bold">
            {question.question}
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          {question.options.map((option) => (
            <Grid item key={option} xs={12} md={6}>
              <Button
                sx={{
                  border: "1px solid #d9d9d9",
                  borderRadius: "10px",
                  fontSize: "1rem",
                  width: "100%",
                  height: "100%",
                  minHeight: "60px",
                  color: "#000",
                  "&.active": {
                    backgroundColor: "#3965c9 !important",
                    color: "#fff",
                  },
                }}
                className={selectedAnswer === option ? "active" : ""}
                onClick={() => handleSelectQuestion(option)}
              >
                {option}
              </Button>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
