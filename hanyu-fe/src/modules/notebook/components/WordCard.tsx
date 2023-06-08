import { useState } from "react";

import EditNoteIcon from "@mui/icons-material/EditNote";
import { Box, Card, Stack, Typography } from "@mui/material";
import { toast } from "react-toastify";

import { useAppSelector } from "~/redux/hooks";
import { WordNote } from "../models";
import { Word } from "../models/Word";
import { AddNoteModal } from ".";

type Props = {
  word: Word;
  wordNote: WordNote | undefined;
  fetchListWordNotes: () => void;
};

export default function WordCard({ word, wordNote, fetchListWordNotes }: Props) {
  const auth = useAppSelector((state) => state.auth);
  const profile = useAppSelector((state) => state.profile.user);

  const [open, setOpen] = useState(false);

  const handleClickAddNote = () => {
    if (!auth.isAuthenticated) {
      toast.error("Bạn cần đăng nhập để sử dụng tính năng này");
      return;
    }
    if (!profile.isSubscribed) {
      toast.error("Bạn cần nâng cấp tài khoản để sử dụng tính năng này");
      return;
    }
    setOpen(true);
  };

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
        {wordNote === undefined && (
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            borderTop="1px solid #ccc"
            padding="6px 10px"
            sx={{
              backgroundColor: "#f9f9f9",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            onClick={handleClickAddNote}
          >
            <Stack direction="row" gap={1} alignItems="center">
              <EditNoteIcon />
              <Typography variant="body2" fontWeight="bold">
                Ghi chú
              </Typography>
            </Stack>
            <Typography variant="body2" fontWeight="bold">
              Thêm
            </Typography>
          </Stack>
        )}
        {wordNote !== undefined && (
          <Stack
            borderTop="1px solid #ccc"
            padding="0px 10px 6px"
            spacing={1}
            sx={{
              backgroundColor: "#f9f9f9",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                paddingTop: "6px",
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={handleClickAddNote}
            >
              <Stack direction="row" gap={1} alignItems="center">
                <EditNoteIcon />
                <Typography variant="body2" fontWeight="bold">
                  Ghi chú
                </Typography>
              </Stack>
              <Typography variant="body2" fontWeight="bold">
                Chỉnh sửa
              </Typography>
            </Stack>
            <Typography variant="body2">{wordNote.note}</Typography>
          </Stack>
        )}
        <AddNoteModal
          open={open}
          setOpen={setOpen}
          wordNote={wordNote}
          word={word}
          fetchListWordNotes={fetchListWordNotes}
        />
      </Stack>
    </Card>
  );
}
