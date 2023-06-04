import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Card, CardMedia, Link, Stack, TextField, Typography } from "@mui/material";

import BackgroundImage from "~/assets/images/modules/auth/background.jpg";
import authApi from "~/modules/auth/apis/authApi";
import { LoginForm } from "~/modules/auth/models";
import { login } from "~/redux/slices/authSlice";
import AppRoutes from "~/router/AppRoutes";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<
    LoginForm & {
      errors: {
        [key: string]: string;
      }[];
    }
  >({
    email: "",
    password: "",
    errors: [],
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      const oldErrorIndex = formData.errors.findIndex((error) => error.name === "email");
      if (value.length === 0) {
        const error = { name: "email", message: "Email không được để trống" };
        setFormData((prev) => ({
          ...prev,
          [name]: value,
          errors:
            oldErrorIndex === -1
              ? [...prev.errors, error]
              : prev.errors.filter((error) => error.name !== "email").concat(error),
        }));
      } else if (
        !value.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        const error = { name: "email", message: "Email không hợp lệ" };
        setFormData((prev) => ({
          ...prev,
          [name]: value,
          errors:
            oldErrorIndex === -1
              ? [...prev.errors, error]
              : prev.errors.filter((error) => error.name !== "email").concat(error),
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: value,
          errors: prev.errors.filter((error) => error.name !== "email"),
        }));
      }
    } else {
      const oldErrorIndex = formData.errors.findIndex((error) => error.name === "password");
      if (value.length === 0) {
        const error = { name: "password", message: "Mật khẩu không được để trống" };
        setFormData((prev) => ({
          ...prev,
          [name]: value,
          errors:
            oldErrorIndex === -1
              ? [...prev.errors, error]
              : prev.errors.filter((error) => error.name !== "password").concat(error),
        }));
      } else if (value.length < 6) {
        const error = { name: "password", message: "Mật khẩu phải có ít nhất 6 ký tự" };
        setFormData((prev) => ({
          ...prev,
          [name]: value,
          errors:
            oldErrorIndex === -1
              ? [...prev.errors, error]
              : prev.errors.filter((error) => error.name !== "password").concat(error),
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: value,
          errors: prev.errors.filter((error) => error.name !== "password"),
        }));
      }
    }
  };

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.errors.length === 0) {
      let isValid = true;
      if (formData.email.length === 0) {
        const error = { name: "email", message: "Email của bạn không được để trống" };
        setFormData((prev) => ({
          ...prev,
          errors: [...prev.errors, error],
        }));
        isValid = false;
      }
      if (formData.password.length === 0) {
        const error = { name: "password", message: "Mật khẩu không được để trống" };
        setFormData((prev) => ({
          ...prev,
          errors: [...prev.errors, error],
        }));
        isValid = false;
      }
      if (isValid) {
        authApi
          .login({
            email: formData.email.trim().toLowerCase(),
            password: formData.password,
          })
          .then((response) => {
            dispatch(login(response.data?.accessToken));
            navigate(AppRoutes.home);
            toast.success("Đăng nhập thành công");
          })
          .catch(() => {
            toast.error("Email hoặc mật khẩu không chính xác.");
          });
      }
    }
  };

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

              <form onSubmit={handleSubmitLogin}>
                <Stack direction="column" spacing={3}>
                  <TextField
                    label="Email"
                    id="email"
                    placeholder="Nhập email của bạn"
                    variant="filled"
                    type="text"
                    size="small"
                    name="email"
                    value={formData.email}
                    onChange={handleChangeInput}
                    error={formData.errors.some((error) => error.name === "email")}
                    helperText={formData.errors.find((error) => error.name === "email")?.message}
                  />
                  <TextField
                    label="Mật khẩu"
                    id="password"
                    placeholder="Nhập mật khẩu"
                    variant="filled"
                    type="password"
                    size="small"
                    name="password"
                    value={formData.password}
                    onChange={handleChangeInput}
                    error={formData.errors.some((error) => error.name === "password")}
                    helperText={formData.errors.find((error) => error.name === "password")?.message}
                  />
                  <Button type="submit" variant="contained" sx={{ padding: "0.6rem 0" }}>
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
