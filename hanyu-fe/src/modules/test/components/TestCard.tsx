import GradingIcon from "@mui/icons-material/Grading";
import HistoryIcon from "@mui/icons-material/History";
import { Card, CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material";

import { Test } from "../models";

type TestCardProps = {
  test: Test;
};

export default function TestCard({ test }: TestCardProps) {
  return (
    <Grid
      item
      md={4}
      sx={{
        cursor: "pointer",
      }}
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
        <CardMedia component="img" image={test.imageUrl} alt={test.name} />
        <CardContent>
          <Typography variant="h6" component="div" textAlign="center">
            Đề {test.name}
          </Typography>
          <Stack direction="row" justifyContent="space-between" marginTop={2}>
            <Stack spacing={0.5} direction="row" alignItems="center" justifyContent="center">
              <GradingIcon fontSize="small" sx={{ color: "#959595" }} />
              <Typography variant="body2" component="div">
                20 đề
              </Typography>
            </Stack>
            <Stack spacing={0.5} direction="row" alignItems="center" justifyContent="center">
              <HistoryIcon fontSize="small" sx={{ color: "#959595" }} />
              <Typography variant="body2" component="div">
                40'
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}
