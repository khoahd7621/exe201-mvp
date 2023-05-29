import { Link as RouterLink } from "react-router-dom";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Card, CardMedia, Link, Stack, TextField, Typography } from "@mui/material";

import BackgroundImage from "~/assets/images/modules/auth/background.jpg";
import AppRoutes from "~/router/AppRoutes";

export default function LoginPage() {
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
              maxWidth: "600px",
              margin: {
                xs: "2rem",
                sm: "2rem 6rem",
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
                height: "600px",
                padding: {
                  xs: "2rem",
                  md: "2rem 6rem",
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
                  Đăng nhập vào Hanyu
                </Typography>
              </Stack>

              <form>
                <Stack direction="column" spacing={3}>
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
                    Đăng nhập
                  </Button>

                  <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                    <Typography>Bạn chưa có tài khoản?</Typography>
                    <Link
                      to={AppRoutes.register}
                      variant="body2"
                      underline="hover"
                      component={RouterLink}
                    >
                      <Typography>Đăng ký</Typography>
                    </Link>
                  </Stack>

                  <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                    <Link href="#" variant="body2" underline="hover">
                      <Typography>Quên mật khẩu?</Typography>
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
