import { useMemo } from "react";
import { Navigate, Link as RouterLink, useNavigate, useParams } from "react-router-dom";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, CardMedia, Container, Grid, Link, Paper, Stack, Typography } from "@mui/material";
import { toast } from "react-toastify";

import { RenderWord } from "~/modules/reading/components";
import ListReadings from "~/modules/reading/data/ListReadings";
import { Reading } from "~/modules/reading/models";
import AppRoutes from "~/router/AppRoutes";

export default function ReadingDetailPage() {
  const { readingId } = useParams();
  const navigate = useNavigate();

  const reading = useMemo(
    () => ListReadings.find((reading) => `${reading.id}` === readingId),
    [readingId]
  );

  const listRelatedReadings: Reading[] = useMemo(() => [], []);

  const handleClick = () => toast.info("Tính năng đang phát triển! Vui lòng quay lại sau nhé ^^");

  if (!reading) {
    return <Navigate to={AppRoutes.reading} />;
  }

  return (
    <Container maxWidth={false} sx={{ margin: "2rem 0" }}>
      <Grid
        container
        spacing={{
          xs: 1,
          md: 2,
          lg: 3,
        }}
      >
        <Grid item xs={12} md={8} lg={9}>
          <Link to={AppRoutes.reading} component={RouterLink} underline="hover" color="#000">
            <Stack direction="row" alignItems="center" gap={0.2}>
              <ArrowBackIosIcon
                sx={{
                  fontSize: "1.2rem",
                }}
              />
              <Typography variant="body1">Trở lại</Typography>
            </Stack>
          </Link>

          <Paper
            variant="outlined"
            sx={{
              borderRadius: "0.7rem",
              padding: {
                xs: "1rem",
                md: "1rem",
                lg: "2rem",
              },
              margin: "1rem 0 0",
            }}
          >
            <Typography variant="h5" fontWeight="bold" marginBottom={1}>
              {reading.title}
            </Typography>
            <Typography variant="body1">
              {reading.createdAt || new Date().toLocaleDateString("vi-VN")}
            </Typography>
            <Stack direction="row" justifyContent="center" marginY={1}>
              <CardMedia
                component="img"
                image={reading.image}
                alt={reading.title}
                sx={{
                  maxWidth: "40rem",
                }}
              />
            </Stack>
            <div
              style={{
                fontSize: "1.5rem",
                lineHeight: "3.2rem",
                margin: "2rem 0 0",
              }}
              dangerouslySetInnerHTML={{ __html: reading.content }}
            />
          </Paper>

          <Stack direction="row" justifyContent="center" alignItems="center" marginTop={2}>
            <Stack
              direction="row"
              alignItems="center"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={handleClick}
            >
              <AddCircleIcon
                sx={{
                  color: "red",
                }}
              />
              <Typography variant="body1" fontWeight="bold" marginLeft={0.5} color="#570074">
                Thêm bản dịch
              </Typography>
            </Stack>
            <Stack
              sx={{
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
                marginLeft: "1rem",
                paddingLeft: "1rem",
                borderLeft: "1px solid #999",
              }}
              onClick={handleClick}
            >
              <Typography variant="body1" fontWeight="bold" marginLeft={0.5} color="#570074">
                Xem bản dịch
              </Typography>
            </Stack>
          </Stack>

          <RenderWord reading={reading} />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Typography variant="body1">Bài đọc liên quan</Typography>
          <Paper
            variant="outlined"
            sx={{
              borderRadius: "0.7rem",
              padding: "1rem",
              margin: "1rem 0 0",
            }}
          >
            <Stack spacing={2}>
              {listRelatedReadings.length > 0 ? (
                listRelatedReadings.map((read) => (
                  <Box
                    key={read.id}
                    sx={{
                      cursor: "pointer",
                    }}
                    onClick={() => navigate(`${AppRoutes.reading}/${read.id}`)}
                  >
                    <CardMedia component="img" image={read.image} alt={read.title} />
                    <Typography variant="body1" marginTop={1} fontSize={18} marginY={1}>
                      {read.title}
                    </Typography>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="body2" color="#999" fontSize={12}>
                        {read.topic.title}
                      </Typography>
                      <Typography variant="body2" color="#999" fontSize={12}>
                        {read.createdAt || new Date().toLocaleDateString("vi-VN")}
                      </Typography>
                    </Stack>
                  </Box>
                ))
              ) : (
                <Typography variant="body1" color="#999" fontSize={16}>
                  Không có bài đọc liên quan
                </Typography>
              )}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
