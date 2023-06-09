import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import { Avatar, Button, Card, CardMedia, IconButton, Stack, Typography } from "@mui/material";

import { useAppSelector } from "~/redux/hooks";
import { ExamStructure, SelectedQuestionResult } from "../../models";

type Props = {
  index: number;
  examStructure: ExamStructure;
  selectedQuestion: SelectedQuestionResult;
};

export default function ListeningQuestionCardResult({
  index,
  examStructure,
  selectedQuestion,
}: Props) {
  const user = useAppSelector((state) => state.profile.user);
  const { question, selectedAnswer, isCorrect, isSelected } = selectedQuestion;

  const handlePlayAudio = () => {
    const audio = new Audio(question.audioUrl);
    audio.play();
  };

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
      <Typography sx={{ padding: "16px !important" }}>
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          justifyContent="space-between"
          spacing={{
            xs: 3,
            sm: 0,
          }}
        >
          <Stack
            direction={{
              xs: "row",
              sm: "column",
            }}
            gap={2}
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

            {examStructure.name === "Listening" && (
              <IconButton
                sx={{
                  width: "35px",
                  height: "35px",
                  fontSize: "1rem",
                  border: "1px solid #ccc",
                }}
                onClick={handlePlayAudio}
              >
                <VolumeUpOutlinedIcon />
              </IconButton>
            )}
          </Stack>
          {question.type === 1 && (
            <>
              <Stack direction="row" alignItems="center" gap={2}>
                <Card
                  sx={{
                    width: {
                      xs: "90px",
                      sm: "160px",
                    },
                    height: {
                      xs: "90px",
                      sm: "160px",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={question.imageUrl}
                    alt="Question image"
                    sx={{
                      width: {
                        xs: "90px",
                        sm: "160px",
                      },
                      height: {
                        xs: "90px",
                        sm: "160px",
                      },
                    }}
                  />
                </Card>

                <span>{question.question}</span>
              </Stack>
              <Stack
                direction={{
                  xs: "row",
                  sm: "column",
                }}
                justifyContent="center"
                gap={2}
              >
                {question.options.map((option) => (
                  <Button
                    key={option}
                    sx={{
                      border: "1px solid #d9d9d9",
                      borderRadius: "10px",
                      width: "70px",
                      height: "35px",
                      fontSize: "1rem",
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
                      selectedAnswer === option
                        ? question.answer === option
                          ? "true"
                          : "false"
                        : "",
                      question.answer === option ? "true" : ""
                    ).join(" ")}
                  >
                    {option}
                  </Button>
                ))}
              </Stack>
            </>
          )}
          {question.type === 2 && (
            <Stack direction="row" flexGrow={1} alignItems="center" justifyContent="center" gap={2}>
              {question.options.map((option) => (
                <Button
                  key={option}
                  sx={{
                    border: "1px solid #d9d9d9",
                    borderRadius: "10px",
                    height: "35px",
                    fontSize: "1rem",
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
                    selectedAnswer === option
                      ? question.answer === option
                        ? "true"
                        : "false"
                      : "",
                    question.answer === option ? "true" : ""
                  ).join(" ")}
                >
                  {option}
                </Button>
              ))}
            </Stack>
          )}
        </Stack>
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
      </Typography>
    </Card>
  );
}
