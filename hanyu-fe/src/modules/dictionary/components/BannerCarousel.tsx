import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";

import { CardMedia } from "@mui/material";

import banner1 from "~/assets/images/modules/dictionary/banner-1.png";
import banner2 from "~/assets/images/modules/dictionary/banner-2.png";
import AppRoutes from "~/router/AppRoutes";

export default function BannerCarousel() {
  const items = [
    {
      id: 1,
      img: banner1,
    },
    {
      id: 2,
      img: banner2,
      link: AppRoutes.upgrade,
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
      {items.map((item) =>
        item.link ? (
          <Link key={item.id} to={item.link}>
            <CardMedia component="img" src={item.img} alt="Hanyu Banner" width="100%" />
          </Link>
        ) : (
          <CardMedia key={item.id} component="img" src={item.img} alt="Hanyu Banner" width="100%" />
        )
      )}
    </Carousel>
  );
}
