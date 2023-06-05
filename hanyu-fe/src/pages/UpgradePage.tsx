import { useState } from "react";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import ShareIcon from "@mui/icons-material/Share";
import StarRateIcon from "@mui/icons-material/StarRate";
import {
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";

import {
  PaymentModal,
  SubscriptionCard,
  SubscriptionCarousel,
  TableFeatures,
} from "~/modules/upgrade/components";
import { ListSubscriptions } from "~/modules/upgrade/models/Subscription";
import { useAppSelector } from "~/redux/hooks";

export default function UpgradePage() {
  const auth = useAppSelector((state) => state.auth);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    if (auth.isAuthenticated) setOpenModal(true);
    else toast.info("Bạn cần đăng nhập trước khi thực hiện nâng cấp tài khoản nhen ^^");
  };
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Container maxWidth={false} sx={{ margin: "2rem 0" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} lg={9}>
          {/* Carousel */}
          <SubscriptionCarousel />

          {/* Main */}
          <Stack
            spacing={4}
            sx={{
              paddingX: {
                xs: "1rem",
                md: "2rem",
                lg: "4rem",
              },
            }}
          >
            {/* Subscription */}
            <Stack
              spacing={3}
              sx={{
                padding: {
                  xs: "0.5rem",
                  sm: "1rem",
                  md: "2rem",
                  lg: "3rem",
                },
              }}
            >
              <Typography variant="h5" textAlign="center">
                ⚡️ Nâng cấp thành viên Premium để hưởng các ưu đãi 🔥
              </Typography>

              {ListSubscriptions.map((subscription) => (
                <SubscriptionCard
                  key={subscription.id}
                  subscription={subscription}
                  handleOpenModal={handleOpenModal}
                />
              ))}

              <PaymentModal open={openModal} onClose={handleCloseModal} />
            </Stack>

            {/* Features */}
            <TableFeatures />
          </Stack>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Stack spacing={4}>
            {/* Social */}
            <Paper
              variant="outlined"
              sx={{
                padding: "1rem",
                borderRadius: "0.8rem",
                border: "none",
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              }}
            >
              <Stack alignItems="center" spacing={1}>
                <Typography variant="h6" textAlign="center">
                  Cùng kết nối với Hanyu
                </Typography>

                <Link
                  href="https://www.facebook.com/profile.php?id=100092420516497"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button variant="contained" sx={{ borderRadius: "3rem", gap: "6px" }}>
                    <FacebookOutlinedIcon />
                    Panda Hanyu
                  </Button>
                </Link>

                <Link
                  href="https://www.tiktok.com/@pandahanyu"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "3rem",
                      gap: "6px",
                      background: "#000",
                      "&:hover": {
                        background: "#161616",
                      },
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 3333 3333"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      width={20}
                      height={20}
                      fill="#fff"
                    >
                      <path d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm361 744c31 262 177 418 430 434v294c-147 14-276-34-426-124v550c0 700-763 918-1069 417-197-322-76-889 556-911v311c-48 8-99 20-146 36-141 47-220 137-198 294 43 301 595 390 549-198V745h305z" />
                    </svg>
                    Panda Hanyu
                  </Button>
                </Link>
              </Stack>
            </Paper>

            {/* Share */}
            <Card
              variant="outlined"
              sx={{
                borderRadius: "0.8rem",
                border: "none",
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              }}
            >
              <CardContent>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  color="#455887"
                  padding="1rem 2rem"
                  gap={2}
                  sx={{ cursor: "pointer", "&:hover": { background: "#f5f5f5" } }}
                >
                  <ShareIcon
                    sx={{
                      border: "2px solid #455887",
                      borderRadius: "50%",
                      padding: "0.5rem",
                      fontSize: "1.5rem",
                      width: "2.5rem",
                      height: "2.5rem",
                      color: "#455887",
                    }}
                  />

                  <Typography variant="body1">Hãy chia sẻ ngay Panda Hanyu với bạn bè</Typography>
                </Stack>
                <Divider />
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  color="#455887"
                  padding="1rem 2rem"
                  gap={2}
                  sx={{ cursor: "pointer", "&:hover": { background: "#f5f5f5" } }}
                >
                  <StarRateIcon
                    sx={{
                      border: "2px solid #455887",
                      borderRadius: "50%",
                      padding: "0.5rem",
                      fontSize: "1.5rem",
                      width: "2.5rem",
                      height: "2.5rem",
                      color: "#455887",
                    }}
                  />

                  <Typography variant="body1">
                    Hãy ủng hộ Panda Hanyu bằng cách đánh giá 5 sao nhé
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
