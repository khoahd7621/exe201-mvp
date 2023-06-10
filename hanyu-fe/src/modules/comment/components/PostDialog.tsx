import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useState } from "react";
import ReactQuill from "react-quill";
import striptags from "striptags";

import commentApis from "../api/commentApis";

import "react-quill/dist/quill.snow.css";

type Props = {
  open: boolean;
  onClose: () => void;
};

const topics: string[] = [
  "Building",
  " Chinese culture",
  "Chinese tourism",
  "Find a chinese tutor",
  "Find classmates",
  "Learn chinese",
];

export default function PostDialog({ open, onClose }: Props) {
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const handleClose = () => {
    onClose();
  };

  const handleChangeTopic = (event: SelectChangeEvent) => {
    setTopic(event.target.value);
  };
  const handleChangeTitle = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleChangeContent = (value: string) => {
    setContent(value);
  };

  const handleSubmit = () => {
    const plainTextContent = striptags(content);

    commentApis
      .addComment(title, plainTextContent, topic)
      .then(() => {
        setTitle("");
        setContent("");
        setTopic("");
        onClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container maxWidth={false} sx={{ margin: "2rem 0" }}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ color: "#436ab3" }}>
          {"Chủ đề của bài viết:"}
        </DialogTitle>
        <DialogContent>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={topic}
              displayEmpty
              onChange={handleChangeTopic}
              inputProps={{ "aria-label": "Without label" }}
              sx={{ height: 30, width: 250 }}
            >
              <MenuItem value="">
                <em>---- Chủ đề ----</em>
              </MenuItem>
              {topics.map((topic: string) => {
                return <MenuItem value={topic}>{topic}</MenuItem>;
              })}
            </Select>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <TextField
                fullWidth
                value={title}
                onChange={handleChangeTitle}
                placeholder="Vui lòng nhập tiêu đề"
                InputProps={{
                  style: {
                    height: "40px",
                    background: "#fff",
                    fontWeight: 600,
                    fontSize: "14px",
                    marginTop: "10px",
                  },
                }}
              />
            </Box>
            <Box>
              <ReactQuill onChange={handleChangeContent} value={content} />
            </Box>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleSubmit} autoFocus>
            Đăng
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
