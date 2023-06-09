import {
  Box,
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const listTopics = [
  "Xã hội",
  "Thế giới",
  "Showbiz",
  "Kinh tế",
  "Động vật",
  "Thể thao",
  "Máy tính",
  "Tài chính",
  "Pháp luật",
  "Giáo dục",
];

export default function ReadingPage() {
  return (
    <Container maxWidth={false} sx={{ margin: "2rem 0" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Stack spacing={3}>
            <Stack spacing={2}>
              <Typography variant="body1" fontWeight="bold">
                Luyện đọc theo chủ đề
              </Typography>

              <Stack direction="row" alignItems="center" flexWrap="wrap">
                {listTopics.map((topic) => (
                  <Typography
                    key={topic}
                    variant="body1"
                    sx={{
                      color: "#7f180d",
                      boder: "1px solid #d8d8d8",
                      backgroundColor: "#f4e2e1",
                      borderRadius: "1rem",
                      padding: "0.2rem 1rem",
                      cursor: "pointer",
                      marginRight: "1rem",
                      marginBottom: "0.5rem",
                      "&:hover": {
                        backgroundColor: "#7f180d",
                        color: "#fff",
                      },
                    }}
                  >
                    {topic}
                  </Typography>
                ))}
              </Stack>
            </Stack>

            <Stack spacing={2}>
              <Typography variant="body1" fontWeight="bold">
                Học tiếng Trung với video
              </Typography>

              <Stack direction="column" spacing={2}>
                {listTopics.slice(0, 5).map((topic) => (
                  <Card variant="outlined" sx={{ cursor: "pointer" }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://picsum.photos/200/300"
                      alt="green iguana"
                    />
                    <Typography variant="body2" fontWeight="bold" padding="0.4rem">
                      {topic}
                    </Typography>
                  </Card>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={9}>
          <Stack spacing={2}>
            {/* Search bar */}
            <Box
              sx={{
                padding: "0.2rem 1rem",
                border: "1px solid #7f180d",
                backgroundColor: "#fff",
                borderRadius: "0.7rem",
              }}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Tìm kiếm bài đọc"
                  style={{
                    border: "none",
                    fontSize: "1rem",
                    outline: "none",
                    lineHeight: "1.2rem",
                    height: "2rem",
                    display: "block",
                    flexGrow: 1,
                  }}
                />
              </Stack>
            </Box>

            {/* List reading */}
            <Paper
              variant="outlined"
              sx={{
                borderRadius: "0.7rem",
                padding: "0.8rem",
              }}
            >
              <Stack spacing={3}>
                {/* Reading card */}
                <Stack spacing={1}>
                  <Stack direction="row" gap={2} sx={{ cursor: "pointer" }}>
                    <CardMedia
                      component="img"
                      image="https://picsum.photos/200/300"
                      alt="green iguana"
                      sx={{ width: "16rem", height: "9rem", borderRadius: "0.5rem" }}
                    />
                    <Stack spacing={1} flexGrow={1}>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        fontSize={22}
                        sx={{
                          "&:hover": {
                            color: "#7f180d",
                          },
                        }}
                      >
                        美媒：中国部分地区高温来袭，热死兔子和鲤鱼
                      </Typography>
                      <Stack>
                        <Typography variant="body1" color="#797979">
                          Độ khó: Dễ
                        </Typography>
                        <Typography variant="body1" color="#797979">
                          Chủ đề: Xã hội
                        </Typography>
                        <Typography variant="body1" color="#797979">
                          {new Date().toLocaleString("vi-VN")}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Divider />
                </Stack>
                <Box
                  sx={{
                    cursor: "pointer",
                    color: "#7d7d7d",
                    "&:hover": {
                      color: "#000",
                    },
                  }}
                >
                  <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                    <Typography variant="body2">Xem thêm</Typography>
                    <ExpandMoreIcon />
                  </Stack>
                </Box>
              </Stack>
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
