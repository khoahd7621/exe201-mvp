import { useNavigate } from "react-router-dom";

import { Card, Stack, Typography } from "@mui/material";

import { TestResult } from "../models";
import AppRoutes from "~/router/AppRoutes";

type Props = {
  testResult: TestResult;
  examSlug: string;
};

export default function HistoryCard({ testResult, examSlug }: Props) {
  const navigate = useNavigate();

  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: "0.3rem",
        padding: "1rem",
      }}
    >
      <Stack spacing={1}>
        <Typography variant="body2" component="div" fontWeight="bold">
          Số điểm: {testResult.realScore}/{testResult.totalScore}
        </Typography>
        <Typography variant="body2" component="div" fontWeight="bold">
          Thời gian: {new Date(testResult.createdAt).toLocaleString("vi-VN")}
        </Typography>
        <Typography
          variant="body2"
          component="div"
          sx={{
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
          onClick={() => navigate(`${AppRoutes.test}/${examSlug}/history/${testResult.id}`)}
        >
          Xem chi tiết
        </Typography>
      </Stack>
    </Card>
  );
}
