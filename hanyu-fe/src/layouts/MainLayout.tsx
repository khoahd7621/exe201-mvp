import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

import { Footer, Navbar } from "~/common/components";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <Box
        sx={{
          backgroundColor: "#f7f7f7",
          minHeight: "calc(100vh - 264px)",
        }}
      >
        <Outlet />
      </Box>

      <Footer />
    </>
  );
}
