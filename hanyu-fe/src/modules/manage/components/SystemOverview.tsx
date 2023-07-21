import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

import ratingApi from "~/modules/ratings/apis/ratingApi";
import manageApis from "../apis/ManageApis";

const SystemOverview = () => {
  const [monthlyData, setMonthlyData] = useState<number>(0);
  const [yearData, setYearData] = useState<number>(0);
  const [foreverData, setForeverData] = useState<number>(0);

  const [avgRating, setAvgRating] = useState<number>(0);
  const [totalRating, setTotalRating] = useState<number>(0);
  const [oneStar, setOneStar] = useState<number>(0);
  const [twoStar, setTwoStar] = useState<number>(0);
  const [threeStar, setThreeStar] = useState<number>(0);
  const [fourStar, setFourStar] = useState<number>(0);
  const [fiveStar, setFiveStar] = useState<number>(0);

  useEffect(() => {
    fetchUsers();
    fetchRatings();
  }, []);

  const fetchUsers = () => {
    manageApis
      .getUsers(200, 1)
      .then((res) => {
        let quarterCounts = 0;
        let yearCounts = 0;
        let foreverCounts = 0;

        res.forEach((item) => {
          if (item.packageTime === "QUARTER") {
            quarterCounts += 50000;
          }
          if (item.packageTime === "YEAR") {
            yearCounts += 125000;
          }
          if (item.packageTime === "LIFETIME") {
            foreverCounts += 200000;
          }
        });
        setMonthlyData(quarterCounts);
        setYearData(yearCounts);
        setForeverData(foreverCounts);
      })
      .catch((err) => console.error(err));
  };

  const fetchRatings = () => {
    ratingApi
      .fetchAll()
      .then((res) => {
        let oneStarCounts = 0;
        let twoStarCounts = 0;
        let threeStarCounts = 0;
        let fourStarCounts = 0;
        let fiveStarCounts = 0;

        res.ratings.forEach((item) => {
          if (item.star === 1) {
            oneStarCounts += 1;
          }
          if (item.star === 2) {
            twoStarCounts += 1;
          }
          if (item.star === 3) {
            threeStarCounts += 1;
          }
          if (item.star === 4) {
            fourStarCounts += 1;
          }
          if (item.star === 5) {
            fiveStarCounts += 1;
          }
        });

        setAvgRating(res.avg);
        setTotalRating(res.total);
        setOneStar(oneStarCounts);
        setTwoStar(twoStarCounts);
        setThreeStar(threeStarCounts);
        setFourStar(fourStarCounts);
        setFiveStar(fiveStarCounts);
      })
      .catch((err) => console.error(err));
  };

  const options = {
    labels: ["Gói 3 tháng", "Gói 1 năm", "Gói vĩnh viễn"],
    tooltip: {
      theme: "dark",
      y: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formatter: (value: any) =>
          new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value),
      },
    },
  };
  const series = [monthlyData, yearData, foreverData];

  const ratingSeries = [
    {
      name: "Đánh giá",
      data: [oneStar, twoStar, threeStar, fourStar, fiveStar],
    },
  ];
  const ratingOptions = {
    xaxis: {
      categories: ["1 sao", "2 sao", "3 sao", "4 sao", "5 sao"],
    },
    tooltip: {
      theme: "dark",
      y: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formatter: (value: any) => +value + " đánh giá",
      },
    },
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <Box
            sx={{
              paddingBottom: "16px !important",
            }}
          >
            <Box>
              <Typography variant="h4" marginBottom={1}>
                Doanh số bán hàng
              </Typography>
              <Typography variant="body1">
                Tổng doanh thu:{" "}
                {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
                  monthlyData + yearData + foreverData
                )}
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: "25px",
              }}
            >
              <Chart options={options} series={series} type="pie" width="380" />
            </Box>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <Box
            sx={{
              paddingBottom: "16px !important",
            }}
          >
            <Box>
              <Typography variant="h4" marginBottom={1}>
                Đánh giá
              </Typography>
              <Stack direction="row" spacing={2}>
                <Typography variant="body1">Trung bình: {avgRating}</Typography>
                <Typography variant="body1">Tổng số đánh giá: {totalRating}</Typography>
              </Stack>
            </Box>
            <Box
              sx={{
                marginTop: "25px",
              }}
            >
              <Chart options={ratingOptions} type="bar" series={ratingSeries} height="200" />
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SystemOverview;
