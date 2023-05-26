import { useNavigate } from "react-router-dom";

import GradingIcon from "@mui/icons-material/Grading";
import HistoryIcon from "@mui/icons-material/History";
import { Card, CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material";

import AppRoutes from "~/router/AppRoutes";
import { Exam } from "../models";

type ExamCardProps = {
  exam: Exam;
};

export default function ExamCard({ exam }: ExamCardProps) {
  const navigate = useNavigate();

  return (
    <Grid
      item
      md={4}
      sx={{
        cursor: "pointer",
      }}
      onClick={() => navigate(`${AppRoutes.test}/${exam.slug}`)}
    >
      <Card
        variant="outlined"
        sx={{
          borderRadius: "1rem",
          "&:hover": {
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
          },
        }}
      >
        <CardMedia component="img" image={exam.imageUrl} alt={exam.name} />
        <CardContent>
          <Typography variant="h6" component="div" textAlign="center">
            Đề {exam.name}
          </Typography>
          <Stack direction="row" justifyContent="space-between" marginTop={2}>
            <Stack spacing={0.5} direction="row" alignItems="center" justifyContent="center">
              <GradingIcon fontSize="small" sx={{ color: "#959595" }} />
              <Typography variant="body2" component="div">
                {exam.totalTest} đề
              </Typography>
            </Stack>
            <Stack spacing={0.5} direction="row" alignItems="center" justifyContent="center">
              <HistoryIcon fontSize="small" sx={{ color: "#959595" }} />
              <Typography variant="body2" component="div">
                {exam.structures.reduce((acc, cur) => acc + cur.totalTime, 0)}'
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}
