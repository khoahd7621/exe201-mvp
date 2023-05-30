import { Link as RouterLink } from "react-router-dom";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditNoteIcon from "@mui/icons-material/EditNote";
import HistoryIcon from "@mui/icons-material/History";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Card, Container, Grid, Link, Paper, Stack, Typography } from "@mui/material";

import AppRoutes from "~/router/AppRoutes";

export default function NoteBookDetailPage() {
  return (
    <Container maxWidth={false} sx={{ margin: "2rem 0" }}>
      <Grid container spacing={4}>
        {/* Left bar */}
        <Grid item xs={12} md={4} lg={3}>
          <Stack spacing={2}>
            <Paper variant="outlined" sx={{ borderRadius: "0.5rem", padding: "0.8rem" }}>
              <Stack>
                <Link
                  component={RouterLink}
                  to={AppRoutes.notebook}
                  underline="hover"
                  sx={{
                    color: "#000",
                    "&:hover": {
                      color: "#333",
                    },
                  }}
                >
                  <Stack direction="row" alignItems="center">
                    <ArrowBackIosIcon sx={{ fontSize: 14 }} />

                    <Typography variant="body2" fontWeight="bold">
                      Back
                    </Typography>
                  </Stack>
                </Link>

                <Typography
                  variant="h5"
                  fontWeight="bold"
                  marginBottom={1}
                  textAlign="center"
                  margin="0.5rem 0"
                >
                  HSK 1
                </Typography>

                <Stack direction="row" justifyContent="space-between">
                  <Stack direction="row" alignItems="center" gap={1}>
                    <EditNoteIcon />
                    <Typography variant="body2" fontWeight="bold">
                      100w
                    </Typography>
                  </Stack>

                  <Stack direction="row" alignItems="center" gap={1}>
                    <HistoryIcon />
                    <Typography variant="body2" fontWeight="bold">
                      01-08-2019
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Paper>

            <Paper
              variant="outlined"
              sx={{
                borderRadius: "0.5rem",
                padding: "0.8rem",
                "&:focus": {
                  outline: "none",
                },
              }}
            >
              <Stack direction="row" gap={1}>
                <input
                  type="text"
                  placeholder="Search"
                  style={{
                    border: "none",
                    outline: "none",
                    flexGrow: 1,
                    fontSize: "1rem",
                  }}
                />

                <SearchIcon
                  sx={{
                    cursor: "pointer",
                  }}
                />
              </Stack>
            </Paper>
          </Stack>
        </Grid>

        {/* Main content */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper variant="outlined" sx={{ borderRadius: "0.5rem", padding: "1rem" }}>
            <Stack spacing={2}>
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
                        <strong>北边</strong> <div>【北邊】</div> <div>【 běi biān 】</div>
                      </Stack>
                      <Typography>Beijing, capital of People's Republic of China</Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    borderTop="1px solid #ccc"
                    padding="6px 10px"
                    sx={{ backgroundColor: "#f9f9f9" }}
                  >
                    <Stack direction="row" gap={1} alignItems="center">
                      <EditNoteIcon />
                      <Typography variant="body2" fontWeight="bold">
                        Ghi chú
                      </Typography>
                    </Stack>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      sx={{
                        cursor: "pointer",
                      }}
                    >
                      Thêm
                    </Typography>
                  </Stack>
                </Stack>
              </Card>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
