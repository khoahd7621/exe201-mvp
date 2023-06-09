import { useNavigate } from "react-router-dom";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Button, Card, Grid, Stack, Typography } from "@mui/material";

import { toast } from "react-toastify";
import { useAppSelector } from "~/redux/hooks";
import AppRoutes from "~/router/AppRoutes";
import { Test } from "../models";

type TestCardProps = {
  test: Test;
  isLocked: boolean;
  examSlug: string;
};

const TestCard = ({ test, isLocked, examSlug }: TestCardProps) => {
  const navigate = useNavigate();
  const auth = useAppSelector((state) => state.auth);
  const user = useAppSelector((state) => state.profile.user);

  const handleClickButton = () => {
    if (!auth.isAuthenticated && isLocked === false) {
      toast.error("Bạn cần phải đăng nhập thì mới vào thi được đóa ^^");
      return;
    }

    if (!auth.isAuthenticated && isLocked) {
      toast.info("Bạn cần đăng nhập và kích hoạt premium để mở khóa toàn bộ bài thi nhen ^^");
      return;
    }

    if (auth.isAuthenticated && isLocked && !user.isSubscribed) {
      toast.info("Bạn cần kích hoạt premium để mở khóa toàn bộ bài thi nhen ^^");
      return;
    }

    navigate(`${AppRoutes.test}/${examSlug}/${test.slug}`);
  };

  return (
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <Card variant="outlined" sx={{ borderRadius: "1rem", padding: "1.5rem" }}>
        <Typography variant="body1" textAlign="center" component="div" marginBottom="1rem">
          Đề số {test.no}
        </Typography>
        <Stack direction="row" justifyContent="center">
          <Button
            startIcon={isLocked ? <LockOutlinedIcon /> : undefined}
            sx={{
              borderRadius: "2rem",
              border: "1px dashed",
              padding: "0.5rem 1.5rem",
              borderColor: isLocked ? "#f57c00" : "#1976d2",
            }}
            color={isLocked ? "warning" : "primary"}
            onClick={handleClickButton}
          >
            {isLocked ? "Mở khóa" : "Vào thi ngay"}
          </Button>
        </Stack>
      </Card>
    </Grid>
  );
};

export default TestCard;
