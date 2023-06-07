import { useState } from "react";
import { Navigate, Link as RouterLink } from "react-router-dom";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";

import { Seo } from "~/common/components";
import { ChangePassword } from "~/modules/profile/components";
import { useAppSelector } from "~/redux/hooks";
import AppRoutes from "~/router/AppRoutes";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProfilePage() {
  const auth = useAppSelector((state) => state.auth);
  const profile = useAppSelector((state) => state.profile.user);
  const [value, setValue] = useState(0);

  const handleChangeTab = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (!auth.isAuthenticated) {
    toast.error("Bạn cần đăng nhập để truy cập trang này");
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <>
      <Seo
        data={{
          title: "Panda Hanyu | Thông Tin Của Bạn",
          description: "Panda Hanyu Thông Tin Của Bạn",
          url: `https://hanyu-chinesee-learning.vercel.app/${AppRoutes.profile}`,
          href: AppRoutes.profile,
          thumbnailUrl:
            "https://res.cloudinary.com/khoahd7621/image/upload/v1686117832/banner-2_fkf4w3.png",
          noindex: true,
        }}
      />

      <Container maxWidth={false} sx={{ margin: "2rem 0" }}>
        <Stack direction="row" justifyContent="center">
          <Card variant="outlined" sx={{ width: "100%", maxWidth: "800px" }}>
            <CardContent>
              <Stack direction="row" gap={2}>
                <Stack
                  sx={{
                    width: "80px",
                    height: "80px",
                  }}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Avatar
                    sx={{ width: 60, height: 60 }}
                    src="https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=Max"
                  />
                </Stack>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <Stack>
                      <Typography variant="h6" fontWeight="bold">
                        {profile.name}
                      </Typography>
                      <Typography variant="subtitle2">
                        <strong>Email:</strong> {profile.email}
                      </Typography>
                      <Typography variant="subtitle2">
                        <strong>Ngày tham gia:</strong> {new Date().getFullYear()}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      marginTop: {
                        xs: "1rem",
                        md: "0",
                      },
                    }}
                  >
                    <Stack>
                      <Typography variant="h6" fontWeight="bold">
                        Gói đăng ký
                      </Typography>
                      <Typography variant="subtitle2">
                        <strong>Loại tài khoản:</strong>{" "}
                        <Typography component="span" color={profile.isSubscribed ? "red" : "#000"}>
                          {profile.isSubscribed ? "Premium" : "Free"}
                        </Typography>
                      </Typography>
                      <Typography variant="subtitle2">
                        <strong>Thời hạn:</strong>{" "}
                        {profile.subscriptionExpiredDate
                          ? new Date(profile.subscriptionExpiredDate).toLocaleDateString("vi-VN")
                          : "N/a"}{" "}
                        -{" "}
                        <Link to="" component={RouterLink} underline="hover">
                          Gia hạn
                        </Link>
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>

              <Divider sx={{ margin: "0.8rem 0" }} />

              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs value={value} onChange={handleChangeTab} aria-label="basic tabs example">
                    <Tab label="Bình luận" {...a11yProps(0)} />
                    <Tab label="Tương tác" {...a11yProps(1)} />
                    <Tab label="Đổi mật khẩu" {...a11yProps(2)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  Tính năng đang được phát triển, bạn vui lòng quay lại sau nhé ^^
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Tính năng đang được phát triển, bạn vui lòng quay lại sau nhé ^^
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <ChangePassword />
                </TabPanel>
              </Box>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </>
  );
}
