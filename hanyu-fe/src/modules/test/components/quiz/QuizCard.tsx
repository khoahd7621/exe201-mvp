import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import { Avatar, Button, Card, CardContent, CardMedia, IconButton, Stack } from "@mui/material";

import { ExamStructure } from "../../models";
import { ExamPart } from "../../models/ExamPart";
import { Question } from "../../models/Question";

type QuizCardProps = {
  question: Question;
  examStructure: ExamStructure;
  examPart: ExamPart;
};

export default function QuizCard({ question, examStructure, examPart }: QuizCardProps) {
  const handlePlayAudio = () => {
    const audio = new Audio(question.audioUrl);
    audio.play();
  };

  return (
    <Card
      id={`question-${question.id}`}
      variant="outlined"
      sx={{ margin: "1rem 0", borderRadius: "0.6rem" }}
    >
      <CardContent sx={{ padding: "16px !important" }}>
        <Stack direction="row" justifyContent="space-between">
          <Stack gap={2}>
            <Avatar
              children="1"
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
          {examPart.type === 1 && (
            <Stack direction="row" alignItems="center" gap={2}>
              <Card sx={{ width: "160px", height: "160px" }}>
                <CardMedia
                  component="img"
                  image={question.imageUrl}
                  alt="Question image"
                  sx={{
                    width: "160px",
                    height: "160px",
                  }}
                />
              </Card>

              <span>{question.question}</span>
            </Stack>
          )}
          {examPart.type === 1 && (
            <Stack justifyContent="center" gap={2}>
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
                    "&:active": {
                      backgroundColor: "#3965c9",
                      color: "#fff",
                    },
                  }}
                >
                  {option}
                </Button>
              ))}
            </Stack>
          )}
          {examPart.type === 2 && (
            <Stack direction="row" alignItems="center" justifyContent="center" gap={2}>
              {question.options.map((option) => (
                <Button
                  key={option}
                  sx={{
                    border: "1px solid #d9d9d9",
                    borderRadius: "10px",
                    height: "35px",
                    fontSize: "1rem",
                    color: "#000",
                    "&:active": {
                      backgroundColor: "#3965c9",
                      color: "#fff",
                    },
                  }}
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
