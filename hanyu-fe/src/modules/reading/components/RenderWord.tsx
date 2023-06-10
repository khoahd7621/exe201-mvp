import { useMemo } from "react";

import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

import ListWordLevels from "~/modules/reading/data/ListWordLevels";
import ListWords from "~/modules/reading/data/ListWords";
import { Reading } from "../models";

type Props = {
  reading: Reading;
};

export default function RenderWord({ reading }: Props) {
  const listWordLevels = useMemo(() => ListWordLevels, []);
  const listWords = useMemo(
    () => (reading ? ListWords.filter((word) => word.readingId === reading.id) : []),
    [reading]
  );

  const handlePlayAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: "0.7rem",
        padding: {
          xs: "0 1rem",
          md: "0 1rem",
          lg: "0 2rem",
        },
        margin: "1rem 0 0",
      }}
    >
      {listWordLevels.map((wordLevel) => {
        const listWordsByLevel = listWords.filter((word) => word.wordLevelId === wordLevel.id);
        if (listWordsByLevel.length === 0) {
          return null;
        }
        return (
          <Box
            key={wordLevel.id}
            sx={{
              padding: {
                xs: "1rem 0",
                md: "1rem 0",
                lg: "2rem 0 1rem",
              },
              marginBottom: "1rem",
              "& + &": {
                borderTop: "1px solid #d2d2d2",
              },
            }}
          >
            <Stack direction="row" alignItems="center" gap={1} marginBottom={2}>
              <Box
                sx={{
                  width: "1rem",
                  height: "1rem",
                  backgroundColor: wordLevel.color,
                  borderRadius: "0.2rem",
                  border: "1px solid #d7d7d7",
                }}
              ></Box>
              <Typography variant="body1" fontWeight="bold">
                {wordLevel.name}
              </Typography>
            </Stack>
            <Grid container spacing={2}>
              {listWordsByLevel.map((word) => (
                <Grid item xs={12} md={6} key={word.id}>
                  <Stack direction="row" gap={2}>
                    <Box
                      sx={{
                        cursor: "pointer",
                      }}
                      onClick={() => handlePlayAudio(word.sound)}
                    >
                      <VolumeUpIcon />
                    </Box>
                    <Stack spacing={1}>
                      <Typography variant="body1">
                        {word.word} 【 {word.hanyu} 】
                      </Typography>
                      <Typography variant="body2">{word.meaning}</Typography>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>
        );
      })}
    </Paper>
  );
}
