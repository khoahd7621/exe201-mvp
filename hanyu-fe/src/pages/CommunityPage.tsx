import { useEffect, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Groups2Icon from "@mui/icons-material/Groups2";
import RecommendIcon from "@mui/icons-material/Recommend";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import commentApis from "~/modules/comment/api/commentApis";
import { PostDialog } from "~/modules/comment/components";
import { CommentBlog } from "~/modules/comment/models";

const topics: string[] = [
  "Building",
  "Chinese culture",
  "Chinese tourism",
  "Find a chinese tutor",
  "Find classmates",
  "Learn chinese",
];

export default function CommunityPage() {
  const [showMore, SetShowMore] = useState(false);
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState<CommentBlog[]>([]);

  useEffect(() => {
    fetchListComment();
  }, [comments]);

  const fetchListComment = () => {
    commentApis
      .getListComments()
      .then((res) => setComments(res))
      .catch((err) => console.log(err));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth={false} sx={{ margin: "2rem 0" }}>
      <Grid container spacing={2}>
        <Grid item xs={3} md={3}>
          {/* Search blocks */}
          <TextField
            id="search"
            size="small"
            type="search"
            placeholder="Search"
            fullWidth
            InputProps={{
              style: {
                height: "40px",
                background: "#fff",
                fontWeight: 600,
                fontSize: "14px",
              },
              endAdornment: <SearchIcon sx={{ fontSize: "20px" }} />,
            }}
          />
          <Paper sx={{ minHeight: 200, m: "auto", mt: 2 }}>
            <Box sx={{ borderBottom: 1, borderBottomColor: "#ccc" }}>
              <Typography
                variant="body1"
                sx={{ fontSize: "14px", fontWeight: 600, color: "#363636", p: 1 }}
              >
                Bài đăng nổi bật
              </Typography>
            </Box>
            <Box
              sx={{
                borderTopColor: "#ccc",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  fontWeight: 700,
                  color: "#363636",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 1.5,
                }}
              >
                <FavoriteIcon sx={{ fontSize: "20px" }} />

                <Typography variant="body2" sx={{ fontSize: "15px", ml: "5px" }}>
                  Được Yêu thích
                </Typography>
              </Box>
              <Box
                sx={{
                  fontWeight: 700,
                  color: "#363636",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 1.5,
                }}
              >
                <Groups2Icon sx={{ fontSize: "20px" }} />

                <Typography variant="body2" sx={{ fontSize: "15px", ml: "5px" }}>
                  Nhiều tương tác
                </Typography>
              </Box>
              <Box
                sx={{
                  fontWeight: 700,
                  color: "#363636",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 1.5,
                }}
              >
                <RssFeedIcon sx={{ fontSize: "20px" }} />

                <Typography variant="body2" sx={{ fontSize: "15px", ml: "5px" }}>
                  Được Theo dõi nhiều
                </Typography>
              </Box>
              <Box
                sx={{
                  fontWeight: 700,
                  color: "#363636",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 1.5,
                }}
              >
                <RecommendIcon sx={{ fontSize: "20px" }} />

                <Typography variant="body2" sx={{ fontSize: "15px", ml: "5px" }}>
                  Đề xuất
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Paper sx={{ height: 500, m: "auto", mt: 2 }}>
            {topics.map((t) => {
              return (
                <Box
                  sx={{
                    borderTopColor: "#ccc",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <Box
                    key={t}
                    sx={{
                      fontWeight: 700,
                      color: "#363636",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      p: 1.5,
                    }}
                  >
                    <AddIcon sx={{ fontSize: "20px" }} />

                    <Typography variant="body2" sx={{ fontSize: "15px", ml: "5px" }}>
                      {t}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Paper>
        </Grid>
        <Grid item xs={6} md={6}>
          <Paper
            sx={{ height: 70, m: "auto", mt: 2, display: "flex", alignItems: "center" }}
            onClick={handleClickOpen}
          >
            <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" sx={{ ml: 2 }} />
            <Typography
              variant="h5"
              sx={{ color: "#ccc", fontWeight: 600, fontSize: "14px", ml: 2 }}
            >
              Thanh Phat, Bạn muốn hỏi về điều gì ?
            </Typography>
          </Paper>
          {comments.map((item) => {
            return (
              <Paper key={item.id} sx={{ height: 200, m: "auto", mt: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "24px",
                    fontWeight: 700,
                    p: 1,
                    pl: 2,
                    color: "#363636",
                    textDecoration: "underline",
                  }}
                >
                  {item.title}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                  <Avatar alt="User Avatar" src={item.userLifeInfo.avatar} sx={{ ml: 2 }} />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      ml: 1,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "20px", fontWeight: 700, color: "#363636" }}
                    >
                      {item.userLifeInfo.name}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                      }}
                    >
                      <Box
                        sx={{
                          border: 1,
                          borderColor: "orange",
                          minWidth: "80px",
                          borderRadius: 1,
                          height: "18px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontSize: "12px", fontWeight: 700, color: "orange" }}
                        >
                          {item.userLifeInfo.shortDescription}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          border: 1,
                          borderColor: "#ccc",
                          minWidth: "80px",
                          borderRadius: 1,
                          height: "18px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          ml: 1,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontSize: "12px", fontWeight: 700, color: "#ccc" }}
                        >
                          {new Date(item.createdAt).toLocaleString("vi-VN")}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          border: 1,
                          borderColor: "#ccc",
                          minWidth: "80px",
                          borderRadius: 1,
                          height: "18px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          ml: 1,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontSize: "12px", fontWeight: 700, color: "#ccc" }}
                        >
                          {item.topic}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "20px", fontWeight: 700, color: "#363636", p: 2 }}
                >
                  {item.content}
                </Typography>
                <Box
                  sx={{
                    borderTop: 1,
                    borderTopColor: "#ccc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      fontWeight: 700,
                      color: "#363636",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      p: 1.5,
                    }}
                  >
                    <FavoriteIcon sx={{ fontSize: "15px" }} />

                    <Typography variant="body2" sx={{ fontSize: "10px", ml: "5px" }}>
                      Yêu thích
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      fontWeight: 700,
                      color: "#363636",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      p: 1.5,
                    }}
                  >
                    <ChatBubbleIcon sx={{ fontSize: "15px" }} />

                    <Typography variant="body2" sx={{ fontSize: "10px", ml: "5px" }}>
                      Bình luận
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      fontWeight: 700,
                      color: "#363636",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      p: 1.5,
                    }}
                  >
                    <RssFeedIcon sx={{ fontSize: "15px" }} />

                    <Typography variant="body2" sx={{ fontSize: "10px", ml: "5px" }}>
                      Theo dõi
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      fontWeight: 700,
                      color: "#363636",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      p: 1.5,
                    }}
                  >
                    <ReportProblemIcon sx={{ fontSize: "15px" }} />

                    <Typography variant="body2" sx={{ fontSize: "10px", ml: "5px" }}>
                      Báo cáo
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            );
          })}
        </Grid>
        <Grid item xs={3} md={3}>
          <Paper sx={{ m: "auto", mt: 2, mb: 2 }}>
            <Box sx={{ borderBottom: 1, borderBottomColor: "#ccc" }}>
              <Typography
                variant="body1"
                sx={{ fontSize: "14px", fontWeight: 600, color: "#363636", p: 1 }}
              >
                Các câu hỏi được quan tâm nhiều
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body2"
                sx={{ fontSize: "13px", fontWeight: 600, color: "#363636", p: 1 }}
              >
                1. How to learn chinese
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "13px", fontWeight: 600, color: "#363636", p: 1 }}
              >
                2. My dream
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "13px", fontWeight: 600, color: "#363636", p: 1 }}
              >
                3. Learning Chinese
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "13px", fontWeight: 600, color: "#363636", p: 1 }}
              >
                4. 哈囉
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "13px", fontWeight: 600, color: "#363636", p: 1 }}
              >
                5. 想学好中文
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "13px", fontWeight: 600, color: "#363636", p: 1 }}
              >
                6. ?
              </Typography>
              {showMore ? (
                <>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "13px", fontWeight: 600, color: "#363636", p: 1 }}
                  >
                    7. 哈喽朋友们， 如果你想联系你的英语口语让后
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "13px", fontWeight: 600, color: "#363636", p: 1 }}
                  >
                    8. 你们好
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "13px", fontWeight: 600, color: "#363636", p: 1 }}
                  >
                    9. 我要去北京
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "13px", fontWeight: 600, color: "#363636", p: 1 }}
                  >
                    10. 你好我叫塔娜
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "13px", fontWeight: 600, color: "#363636", p: 1 }}
                  >
                    11. Find chinese classmates
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "13px", fontWeight: 600, color: "#363636", p: 1 }}
                  >
                    12. 你好。。。
                  </Typography>
                </>
              ) : (
                <></>
              )}
              <Button onClick={() => SetShowMore(!showMore)}>
                {!showMore ? "⬇ Xem thêm" : "⬆ Thu gọn"}
              </Button>
            </Box>
          </Paper>

          <Paper>
            <Typography variant="body2" sx={{ fontWeight: 600, pt: 1, pl: 1 }}>
              Xép hạng
            </Typography>
            <Stack display={"flex"} justifyContent="space-between" direction={"row"}>
              <Button
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "30px",
                  m: 2,
                  "&:hover": {
                    cursor: "pointer",
                    border: 1,
                    borderColor: "#ccd0d5",
                    borderRadius: 1,
                    background: "#f8f8f8",
                  },
                  "&:focus": {
                    border: 1,
                    borderColor: "#ccd0d5",
                    borderRadius: 1,
                  },
                }}
              >
                <Typography variant="body2" sx={{ color: "#6c757d", fontSize: "12px" }}>
                  Ngày
                </Typography>
              </Button>
              <Button
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "30px",
                  m: 2,
                  "&:hover": {
                    cursor: "pointer",
                    border: 1,
                    borderColor: "#ccd0d5",
                    borderRadius: 1,
                    background: "#f8f8f8",
                  },
                  "&:focus": {
                    border: 1,
                    borderColor: "#ccd0d5",
                    borderRadius: 1,
                  },
                }}
              >
                <Typography variant="body2" sx={{ color: "#6c757d", fontSize: "14px" }}>
                  Tuần
                </Typography>
              </Button>
              <Button
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "30px",
                  m: 2,
                  "&:hover": {
                    cursor: "pointer",
                    border: 1,
                    borderColor: "#ccd0d5",
                    borderRadius: 1,
                    background: "#f8f8f8",
                  },
                  "&:focus": {
                    border: 1,
                    borderColor: "#ccd0d5",
                    borderRadius: 1,
                  },
                }}
              >
                <Typography variant="body2" sx={{ color: "#6c757d", fontSize: "14px" }}>
                  Tháng
                </Typography>
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
      {/* Post Block */}
      <PostDialog open={open} onClose={handleClose} />
    </Container>
  );
}
