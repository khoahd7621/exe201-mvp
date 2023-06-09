import { Avatar, Button, Card, CardContent, Grid, Stack, Typography } from "@mui/material";

import { useAppSelector } from "~/redux/hooks";
import { SelectedQuestionResult } from "../../models";

type Props = {
  index: number;
  selectedQuestion: SelectedQuestionResult;
};

export default function ReadingQuestionCardResult({ index, selectedQuestion }: Props) {
  const user = useAppSelector((state) => state.profile.user);
  const { question, selectedAnswer, isCorrect, isSelected } = selectedQuestion;

  return (
    <Card
      id={`question-${question.id}`}
      variant="outlined"
      sx={{
        margin: "1rem 0",
        borderRadius: "0.6rem",
        "&.true": {
          border: "1px solid #4caf50 !important",
        },
        "&.false": {
          border: "1px solid #f44336 !important",
        },
      }}
      className={isCorrect ? "true" : "false"}
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
                  "&.true": {
                    backgroundColor: "#4caf50 !important",
                    color: "#fff",
                  },
                  "&.false": {
                    backgroundColor: "#f44336 !important",
                    color: "#fff",
                  },
                }}
                className={Array.of(
                  selectedAnswer === option ? (question.answer === option ? "true" : "false") : "",
                  question.answer === option ? "true" : ""
                ).join(" ")}
              >
                {option}
              </Button>
            </Grid>
          ))}
        </Grid>
        {!isSelected && (
          <Typography variant="body2" fontWeight="bold" color="red" marginTop={2}>
            Không chọn đáp án
          </Typography>
        )}
        {user.isSubscribed ? (
          <Typography
            variant="body2"
            fontWeight="bold"
            marginTop={2}
            fontStyle="italic"
            color="#707070"
          >
            Giải thích của câu hỏi đang được cập nhật, vui lòng quay lại sau
          </Typography>
        ) : (
          <Typography
            variant="body2"
            fontWeight="bold"
            marginTop={2}
            fontStyle="italic"
            color="#707070"
          >
            Bạn phải nâng cấp tài khoản để được xem giải thích của câu hỏi này
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
