import { Container, Grid, Box, Typography, Stack } from "@mui/material";
import { Icon } from "@iconify/react";

export default function Navbar() {
  return (
    <>
      <Container sx={{ position: "fixed", minWidth: "100vw", bottom: 0, borderTop: 2, borderColor: '#363636' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h4" sx={{ margin: "15px", fontSize: 20, fontWeight: 600 }}>
              Information
            </Typography>
            <Typography
              variant="h6"
              sx={{
                margin: "15px",
                color: "#363636",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {" "}
              About
            </Typography>
            <Typography
              variant="h6"
              sx={{
                margin: "15px",
                color: "#363636",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {" "}
              Policy
            </Typography>
            <Typography
              variant="h6"
              sx={{
                margin: "15px",
                color: "#363636",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {" "}
              Term
            </Typography>
            <Typography
              variant="h6"
              sx={{
                margin: "15px",
                color: "#363636",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {" "}
              Help
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h4" sx={{ margin: "15px", fontSize: 20, fontWeight: 600 }}>
              Contact
            </Typography>
            <Typography
              variant="h6"
              sx={{ margin: "15px", color: "#363636", fontSize: 14, fontWeight: 600 }}
            >
              {" "}
              Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh
            </Typography>
            <Typography
              variant="h6"
              sx={{ margin: "15px", color: "#363636", fontSize: 14, fontWeight: 600 }}
            >
              {" "}
              (+84) 938 183 330
            </Typography>
            <Typography
              variant="h6"
              sx={{ margin: "15px", color: "#363636", fontSize: 14, fontWeight: 600 }}
            >
              {" "}
              support.hanyu@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h4" sx={{ margin: "15px", fontSize: 20, fontWeight: 600 }}>
              Anothers
            </Typography>
            <Typography
              variant="h6"
              sx={{ margin: "15px", color: "#363636", fontSize: 14, fontWeight: 600 }}
            >
              {" "}
              © 2023 Hanyu. All right reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h4" sx={{ margin: "15px", fontSize: 20, fontWeight: 600 }}>
              Download
            </Typography>
            <Grid container sx={{ m: 0 }}>
              <Grid item sx={{ paddingLeft: "15px" }}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1}
                  sx={{
                    background: "#000",
                    width: 120,
                    height: 44,
                    borderRadius: "8px",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Icon icon="mdi:google-play" color="white" width="32" height="32" />
                  </Box>
                  <Box>
                    <Typography
                      sx={{ fontSize: 9, fontWeight: 400, color: "#fff", marginTop: "2px" }}
                    >
                      Download on
                    </Typography>
                    <Typography sx={{ fontSize: 18, fontWeight: 600, color: "#fff" }}>
                      Google Play
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid item sx={{ paddingLeft: "15px" }}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1}
                  sx={{
                    background: "#000",
                    width: 120,
                    height: 44,
                    borderRadius: "8px",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Icon icon="ic:baseline-apple" color="white" width="32" height="32" />
                  </Box>
                  <Box>
                    <Typography
                      sx={{ fontSize: 9, fontWeight: 400, color: "#fff", marginTop: "2px" }}
                    >
                      Download on
                    </Typography>
                    <Typography sx={{ fontSize: 18, fontWeight: 600, color: "#fff" }}>
                      Google Play
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
