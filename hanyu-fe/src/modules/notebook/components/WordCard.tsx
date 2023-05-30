import EditNoteIcon from "@mui/icons-material/EditNote";
import { Box, Card, Stack, Typography } from "@mui/material";

import { Word } from "../models/Word";

type Props = {
  word: Word;
};

export default function WordCard({ word }: Props) {
  return (
    <Card variant="outlined">
      <Stack>
        <Stack direction="row">
          <Box
            sx={{
              minWidth: "4rem",
              minHeight: "5rem",
              borderRight: "1px solid #ccc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
            }}
          >
            W
          </Box>
          <Stack flexGrow={1} spacing={1} padding={2}>
            <Stack direction="row">
              <strong>{word.word}</strong> <div>【 {word.pinyin} 】</div>
            </Stack>
            <Typography>{word.meaning}</Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          borderTop="1px solid #ccc"
          padding="6px 10px"
          sx={{ backgroundColor: "#f9f9f9" }}
        >
          <Stack direction="row" gap={1} alignItems="center">
            <EditNoteIcon />
            <Typography variant="body2" fontWeight="bold">
              Ghi chú
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            fontWeight="bold"
            sx={{
              cursor: "pointer",
            }}
          >
            Thêm
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
