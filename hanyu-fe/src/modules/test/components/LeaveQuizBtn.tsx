import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import AppRoutes from "~/router/AppRoutes";

export default function LeaveQuizBtn() {
  const navigate = useNavigate();
  const { examType } = useParams();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLeave = () => {
    setOpen(false);
    navigate(`${AppRoutes.test}/${examType}`);
  };

  return (
    <>
      <Button
        startIcon={<ArrowBackOutlinedIcon />}
        variant="text"
        sx={{
          color: "#fff",
          "&:hover": {
            color: "#ccc",
            textDecoration: "underline",
          },
        }}
        onClick={handleClickOpen}
      >
        Quay lại
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
            Bạn đang làm dở bài thi, bạn có muốn thoát không?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="info" onClick={handleClose} autoFocus>
            Hủy Bỏ
          </Button>
          <Button variant="contained" color="error" onClick={handleLeave}>
            Đồng Ý
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
