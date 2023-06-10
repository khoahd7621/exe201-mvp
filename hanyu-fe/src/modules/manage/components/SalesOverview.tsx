import Chart from "react-apexcharts";
import "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import manageApis from "../apis/ManageApis";

const SalesOverview = () => {
  const [monthlyData, setMonthlyData] = useState(Array(12).fill(0));
  const [yearData, setYearData] = useState(Array(12).fill(0));
  const [foreverData, setForeverData] = useState(Array(12).fill(0));

  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = () => {
    manageApis
      .getUsers(200, 1)
      .then((res) => {
        console.log(res);
        // Process data and map to the monthlyData array
        const quarterCounts = Array(12).fill(0);
        const yearCounts = Array(12).fill(0);
        const foreverCounts = Array(12).fill(0);

        res.forEach((item) => {
          const createdAtDate = new Date(item.createdAt);
          const month = createdAtDate.getMonth(); // Get month index (0-11)
          console.log(item.packageTime);
          if (item.packageTime === "QUARTER") {
            quarterCounts[month] += 50000; // Add 50,000 to the corresponding month for QUARTER
          }
          if (item.packageTime === "YEAR") {
            yearCounts[month] += 125000; // Add 125,000 to the corresponding month for YEAR
          }
          if (item.packageTime === "FOREVER") {
            yearCounts[month] += 400000; 
          }
        });
        setMonthlyData(quarterCounts);
        setYearData(yearCounts);
        setForeverData(foreverCounts);
      })
      .catch((err) => console.log(err));
  };

  console.log(monthlyData);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const optionssalesoverview: ApexCharts.ApexOptions = {
    grid: {
      show: true,
      borderColor: "transparent",
      strokeDashArray: 2,
      padding: {
        left: 0,
        right: 0,
        bottom: 0,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "42%",
        borderRadius: 5,
      },
    },

    colors: ["#1e4db7", "#a7e3f4"],
    fill: {
      type: "solid",
      opacity: 1,
    },
    chart: {
      offsetX: -15,
      toolbar: {
        show: false,
      },
      foreColor: "#adb0bb",
      fontFamily: "'DM Sans',sans-serif",
      sparkline: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    legend: {
      show: false,
    },
    xaxis: {
      type: "category",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    yaxis: {
      show: true,
      min: 0,
      max: 2000000,
      tickAmount: 5,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    stroke: {
      show: true,
      width: 5,
      lineCap: "butt",
      colors: ["transparent"],
    },
    tooltip: {
      theme: "dark",
      y: {
        formatter: (value) =>
          new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value),
      },
    },
  };

  const seriessalesoverview = [
    {
      name: "Gói 3 tháng",
      color: "#AED8CC",
      data: monthlyData,
    },
    {
      name: "Gói 1 năm",
      color: "#CD6688",
      data: yearData,
    },
    {
      name: "Gói vĩnh viễn",
      color: "#7A316F",
      data: foreverData,
    },
  ];

  return (
    <Card
      variant="outlined"
      sx={{
        paddingBottom: "0",
      }}
    >
      <CardContent
        sx={{
          paddingBottom: "16px !important",
        }}
      >
        <Box
          sx={{
            display: {
              sm: "flex",
              xs: "block",
            },
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                marginBottom: "0",
              }}
              gutterBottom
            >
              Sales Overview (Total Revenue)
            </Typography>
          </Box>
          <Box
            sx={{
              marginLeft: "auto",
              display: "flex",
              mt: {
                lg: 0,
                xs: 2,
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#AED8CC",
                  borderRadius: "50%",
                  height: 8,
                  width: 8,
                  mr: 1,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#AED8CC",
                }}
              >
                Gói 3 tháng
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#CD6688",
                  borderRadius: "50%",
                  height: 8,
                  width: 8,
                  mr: 1,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#CD6688",
                }}
              >
                Gói 1 năm
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#7A316F",
                  borderRadius: "50%",
                  height: 8,
                  width: 8,
                  mr: 1,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#7A316F",
                }}
              >
                Gói vĩnh viễn
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "25px",
          }}
        >
          <Chart
            options={optionssalesoverview}
            series={seriessalesoverview}
            type="bar"
            height="295px"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default SalesOverview;
