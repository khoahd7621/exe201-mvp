import { Outlet } from "react-router-dom";

import { AppBar, Box, Button, Stack, Toolbar } from "@mui/material";

import { LeaveQuizBtn } from "~/modules/test/components";

export default function QuizLayout() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: {
            xs: "56px",
            sm: "4rem",
          },
        }}
      >
        <AppBar component="nav">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#000",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <LeaveQuizBtn />
            </Box>
            <Stack direction="row" spacing={6} alignItems="center" justifyContent="space-between">
              <Box>Count down</Box>
              <Button variant="contained" color="success">
                Nộp bài
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>

      <div style={{ backgroundColor: "#f7f7f7" }}>
        <Outlet />
      </div>
    </>
  );
}
