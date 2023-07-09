import { useState } from "react";

import { Paper, Stack, Typography } from "@mui/material";

import { WordNote } from "../models";
import { Word } from "../models/Word";

type Props = {
  data: Word;
  wordNote: WordNote | undefined;
};

export default function Flashcard({ data, wordNote }: Props) {
  const [flip, setFlip] = useState<boolean>(false);

  return (
    <Paper
      variant="outlined"
      onClick={() => setFlip(!flip)}
      className={flip ? "flip" : ""}
      sx={{
        margin: "0 30px",
        borderRadius: "0.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        height: "400px",
        cursor: "pointer",
        transform: "rotateY(0)",
        transformStyle: "preserve-3d",
        transition: "all 0.5s ease",
        "&.flip": {
          transform: "rotateY(180deg)",
        },
      }}
    >
      <Typography
        className="front"
        variant="h1"
        textAlign="center"
        sx={{
          position: "absolute",
          backfaceVisibility: "hidden",
        }}
      >
        {data.word}
      </Typography>
      <Stack
        spacing={2}
        className="back"
        sx={{
          position: "absolute",
          transform: "rotateY(180deg)",
          backfaceVisibility: "hidden",
        }}
      >
        <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            {data.word}
          </Typography>

          <Typography variant="h6" sx={{ textAlign: "center" }}>
            【{data.pinyin}】
          </Typography>
        </Stack>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Ý nghĩa: {data.meaning}
        </Typography>

        {wordNote && (
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Ghi chú: {wordNote.note}
          </Typography>
        )}
      </Stack>
    </Paper>
  );
}
