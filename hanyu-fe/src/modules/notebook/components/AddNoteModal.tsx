import { useEffect, useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { toast } from "react-toastify";

import noteBookApi from "../apis/noteBookApis";
import { WordNote } from "../models";
import { Word } from "../models/Word";

export type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  wordNote: WordNote | undefined;
  word: Word;
  fetchListWordNotes: () => void;
};

export default function AddNoteModal({ open, setOpen, wordNote, word, fetchListWordNotes }: Props) {
  const [value, setValue] = useState(wordNote?.note ?? "");
  const [error, setError] = useState("");

  useEffect(() => {
    if (value.trim().length === 0) {
      setError("Ghi chú không được để trống");
    } else {
      setError("");
    }
  }, [value]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitNote = () => {
    if (value.trim().length === 0) {
      setError("Ghi chú không được để trống");
      return;
    }
    noteBookApi
      .addWordNote(value, word.id)
      .then(() => {
        fetchListWordNotes();
        setOpen(false);
        toast.success("Thêm ghi chú thành công!");
      })
      .catch((err) => {
        toast.error("Có lỗi xảy ra! Vui lòng thử lại sau.");
        console.log(err);
      });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{wordNote === undefined ? "Thêm ghi chú" : "Chỉnh sửa ghi chú"}</DialogTitle>
      <DialogContent>
        <TextField
          error={error !== ""}
          variant="standard"
          placeholder="Thêm ghi chú"
          multiline
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helperText={error}
          sx={{
            width: "300px",
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="error" onClick={handleSubmitNote}>
          Đồng Ý
        </Button>
        <Button variant="outlined" color="info" onClick={handleClose} autoFocus>
          Hủy Bỏ
        </Button>
      </DialogActions>
    </Dialog>
  );
}
