import { useEffect, useState } from "react";

import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";

import { Seo } from "~/common/components";
import { useDebounced } from "~/hooks/useDebounced";
import { ReadingCard, TopicButton, VideoCard, ViewMoreBtn } from "~/modules/reading/components";
import ListReadings from "~/modules/reading/data/ListReadings";
import ListTopics from "~/modules/reading/data/ListTopics";
import AppRoutes from "~/router/AppRoutes";

export default function ReadingPage() {
  const [max, setMax] = useState(4);

  const [listReadingsFiltered, setListReadingsFiltered] = useState(ListReadings);
  const [searchInput, setSearchInput] = useState<string>("");

  const keyword = useDebounced(searchInput, 300);

  useEffect(() => {
    if (keyword) {
      const newListReadingsFiltered = ListReadings.filter((item) => {
        const title = item.title.toLowerCase();
        const topic = item.topic.title.toLowerCase();
        const content = item.content.toLowerCase();
        const level = item.level.toLowerCase();
        const keywordLowerCase = keyword.trim().toLowerCase();

        return (
          title.includes(keywordLowerCase) ||
          topic.includes(keywordLowerCase) ||
          content.includes(keywordLowerCase) ||
          level.includes(keywordLowerCase)
        );
      });

      setListReadingsFiltered(newListReadingsFiltered);
      setMax(4);
    } else {
      setListReadingsFiltered(ListReadings);
      setMax(4);
    }
  }, [keyword]);

  const handleClickMore = () => {
    setMax(10);
  };

  return (
    <>
      <Seo
        data={{
          title: "Panda Hanyu | Luyện đọc",
          description: "Panda Hanyu Luyện đọc",
          url: `https://hanyu-chinesee-learning.vercel.app/${AppRoutes.reading}`,
          href: AppRoutes.reading,
          thumbnailUrl:
            "https://res.cloudinary.com/khoahd7621/image/upload/v1686117832/banner-2_fkf4w3.png",
        }}
      />

      <Container maxWidth={false} sx={{ padding: "2rem 0" }}>
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
                  {ListTopics.slice(0, 2).map((topic) => (
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
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                  {searchInput && (
                    <ClearIcon
                      sx={{
                        cursor: "pointer",
                      }}
                      onClick={() => setSearchInput("")}
                    />
                  )}
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
                <Stack>
                  {listReadingsFiltered.length > 0 ? (
                    <>
                      {listReadingsFiltered.slice(0, max).map((reading) => (
                        <ReadingCard key={reading.id} data={reading} />
                      ))}

                      {listReadingsFiltered.length > 4 && max < 5 && (
                        <ViewMoreBtn onClick={handleClickMore} />
                      )}
                    </>
                  ) : (
                    <Typography variant="body2" textAlign="center">
                      Không tìm thấy bài đọc nào
                    </Typography>
                  )}
                </Stack>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
