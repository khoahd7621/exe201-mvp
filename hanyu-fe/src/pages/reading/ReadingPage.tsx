import SearchIcon from "@mui/icons-material/Search";
import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";

import { ReadingCard, TopicButton, VideoCard, ViewMoreBtn } from "~/modules/reading/components";
import ListReadings from "~/modules/reading/data/ListReadings";
import ListTopics from "~/modules/reading/data/ListTopics";

export default function ReadingPage() {
  return (
    <Container maxWidth={false} sx={{ margin: "2rem 0" }}>
      <Grid
        container
        spacing={{
          xs: 2,
          md: 2,
          lg: 4,
        }}
      >
        <Grid item xs={12} md={4} lg={3}>
          <Stack spacing={3}>
            <Stack spacing={2}>
              <Typography variant="body1" fontWeight="bold">
                Luyện đọc theo chủ đề
              </Typography>

              <Stack direction="row" alignItems="center" flexWrap="wrap">
                {ListTopics.map((topic) => (
                  <TopicButton key={topic.id} topic={topic} />
                ))}
              </Stack>
            </Stack>

            <Stack spacing={2}>
              <Typography variant="body1" fontWeight="bold">
                Học tiếng Trung với video
              </Typography>

              <Stack direction="column" spacing={2}>
                {ListTopics.slice(0, 5).map((topic) => (
                  <VideoCard key={topic.id} topic={topic} />
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
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
                {ListReadings.map((reading) => (
                  <ReadingCard key={reading.id} data={reading} />
                ))}

                <ViewMoreBtn />
              </Stack>
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
