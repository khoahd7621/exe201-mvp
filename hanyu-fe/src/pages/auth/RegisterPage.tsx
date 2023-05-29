import { Link as RouterLink } from "react-router-dom";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Card, CardMedia, Link, Stack, TextField, Typography } from "@mui/material";

import BackgroundImage from "~/assets/images/modules/auth/background.jpg";
import AppRoutes from "~/router/AppRoutes";

export default function RegisterPage() {
  return (
    <Box sx={{ backgroundImage: `url(${BackgroundImage})`, height: "100vh", position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          width: "100%",
          transform: "translateY(-50%)",
        }}
      >
        <Stack direction="row" justifyContent="center">
          <Card
            sx={{
              width: "100%",
              maxWidth: "700px",
              margin: {
                xs: "0 1rem",
                md: "0",
              },
            }}
          >
            <Box sx={{ padding: "2rem 0 0 2rem" }}>
              <Link
                to={AppRoutes.home}
                component={RouterLink}
                sx={{
                  color: "#000",
                  "&:hover": {
                    color: "#ccc",
                  },
                }}
              >
                <ArrowBackIosIcon />
              </Link>
            </Box>

            <Stack
              direction="column"
              justifyContent="space-between"
              sx={{
                height: "650px",
                padding: {
                  xs: "2rem",
                  sm: "2rem 6rem",
                },
              }}
            >
              <Stack direction="column" alignItems="center" justifyContent="center" spacing={2}>
                <CardMedia
                  component="img"
                  image="/pandahanyu_logo _for_web.svg"
                  alt="Logo"
                  sx={{ width: "60px" }}
                />
                <Typography variant="h4" textAlign="center" fontWeight="bold" fontSize="1.8rem">
                  Đăng ký tài khoản Hanyu
                </Typography>
              </Stack>

              <form>
                <Stack direction="column" spacing={3}>
                  <TextField
                    label="Tên của bạn"
                    id="fullname"
                    placeholder="Họ và tên của bạn"
                    defaultValue=""
                    variant="filled"
                    type="text"
                    size="small"
                  />
                  <TextField
                    label="Email"
                    id="email"
                    placeholder="Nhập email của bạn"
                    defaultValue=""
                    variant="filled"
                    type="email"
                    size="small"
                  />
                  <TextField
                    label="Mật khẩu"
                    id="password"
                    placeholder="Nhập mật khẩu"
                    defaultValue=""
                    variant="filled"
                    type="password"
                    size="small"
                  />
                  <Button variant="contained" sx={{ padding: "0.6rem 0" }}>
                    Đăng ký
                  </Button>

                  <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                    <Typography>Bạn đã có tài khoản?</Typography>
                    <Link
                      to={AppRoutes.login}
                      variant="body2"
                      underline="hover"
                      component={RouterLink}
                    >
                      <Typography>Đăng nhập</Typography>
                    </Link>
                  </Stack>
                </Stack>
              </form>

              <Stack>
                <Typography fontSize={12} textAlign="center">
                  Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với
                </Typography>
                <Typography fontSize={12} textAlign="center">
                  <Link href="#" underline="hover">
                    Điều khoản sử dụng
                  </Link>{" "}
                  của chúng tôi
                </Typography>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </Box>
    </Box>
  );
}
