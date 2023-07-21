import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";

import { Avatar, Box, Paper, Rating, Stack, Typography } from "@mui/material";
import ratingApi from "../apis/ratingApi";
import { Rating as RatingMD } from "../models";

export default function RatingSlider() {
  const [loading, setLoading] = useState<boolean>(true);
  const [ratings, setRatings] = useState<RatingMD[]>([]);

  // 2 ratings each slide
  const sliderItems = ratings.reduce((acc, curr, index) => {
    if (index % 2 === 0) {
      acc.push([curr]);
    } else {
      acc[acc.length - 1].push(curr);
    }
    return acc;
  }, [] as RatingMD[][]);

  useEffect(() => {
    ratingApi
      .fetchAll()
      .then((res) => {
        setRatings(res.ratings);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Đang tải ...</div>;

  return (
    <Carousel
      indicatorContainerProps={{
        style: {
          display: "none",
        },
      }}
      navButtonsAlwaysInvisible={true}
      autoPlay={true}
      animation="slide"
      duration={200}
    >
      {sliderItems.map((items, index) => (
        <Stack key={index} spacing={2}>
          {items.map((rating) => (
            <Box
              key={rating.id}
              sx={{
                paddingBottom: "1px",
              }}
            >
              <Paper variant="outlined" sx={{ padding: "1rem", borderRadius: "16px" }}>
                <Stack direction="row" spacing={1}>
                  <Avatar>H</Avatar>
                  <Stack direction="column" flexGrow={1} justifyContent={"space-between"}>
                    <Typography variant="body2" fontWeight="600">
                      {"Username"}
                    </Typography>
                    <Rating value={rating.star} size="small" readOnly />
                  </Stack>
                </Stack>
                <Typography variant="body2" fontWeight="600" marginTop={1}>
                  {rating.description}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Stack>
      ))}
    </Carousel>
  );
}
