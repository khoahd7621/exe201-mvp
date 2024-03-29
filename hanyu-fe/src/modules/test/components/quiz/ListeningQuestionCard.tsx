import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import { Avatar, Button, Card, CardContent, CardMedia, IconButton, Stack } from "@mui/material";

import { ExamStructure, SelectedQuestion } from "../../models";
import { Question } from "../../models/Question";

type ListeningQuestionCardProps = {
  index: number;
  question: Question;
  examStructure: ExamStructure;
  selectedAnswer: string;
  selectedQuestions: SelectedQuestion[];
  setSelectedQuestions: (selectedQuestions: SelectedQuestion[]) => void;
};

export default function ListeningQuestionCard({
  index,
  question,
  examStructure,
  selectedAnswer,
  selectedQuestions,
  setSelectedQuestions,
}: ListeningQuestionCardProps) {
  const handlePlayAudio = () => {
    const audio = new Audio(question.audioUrl);
    audio.play();
  };

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
                    "&.active": {
                      backgroundColor: "#3965c9",
                      color: "#fff",
                    },
                  }}
                  className={selectedAnswer === option ? "active" : ""}
                  onClick={() => handleSelectQuestion(option)}
                >
                  {option}
                </Button>
              ))}
            </Stack>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
