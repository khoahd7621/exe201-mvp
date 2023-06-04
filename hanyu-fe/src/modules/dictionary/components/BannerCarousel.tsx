import { CardMedia } from "@mui/material";
import Carousel from "react-material-ui-carousel";

import banner1 from "~/assets/images/modules/dictionary/banner-1.png";
import banner2 from "~/assets/images/modules/dictionary/banner-2.png";

export default function BannerCarousel() {
  const items = [
    {
      id: 1,
      img: banner1,
    },
    {
      id: 2,
      img: banner2,
    },
  ];

  return (
    <Carousel
      indicatorContainerProps={{
        style: {
          display: "none",
        },
      }}
    >
      {items.map((item) => (
        <CardMedia key={item.id} component="img" src={item.img} alt="Hanyu Banner" width="100%" />
      ))}
    </Carousel>
  );
}
