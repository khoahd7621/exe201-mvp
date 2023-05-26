import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Button, Card, Grid, Stack, Typography } from "@mui/material";

import { Test } from "../models";

type TestCardProps = {
  test: Test;
  isLocked: boolean;
};

const TestCard = ({ test, isLocked }: TestCardProps) => {
  const handleClickButton = () => {
    if (isLocked) {
      console.log("Mở khóa");
    } else {
      console.log("Vào thi ngay");
    }
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
