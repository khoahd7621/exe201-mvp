import { useCallback, useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

type Props = {
  handleFinishQuiz: () => void;
  isFinished: boolean;
};

export default function SubmitQuizBtn({ handleFinishQuiz, isFinished }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleFinish = () => {
    setOpen(false);
    handleFinishQuiz();
  };

  return (
    <>
      <Button
        disabled={isFinished}
        variant="contained"
        color="success"
        onClick={() => setOpen(true)}
      >
        Nộp bài
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Cảnh báo?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có chắc chắn muốn nộp bài không ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" onClick={handleClose} autoFocus>
            Hủy Bỏ
          </Button>
          <Button variant="contained" color="primary" onClick={handleFinish}>
            Đồng Ý
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
