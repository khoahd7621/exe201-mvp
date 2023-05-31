import { CardMedia, Paper, Stack, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

import imgSlide1 from "~/assets/images/modules/upgrade/slide_1.png";
import imgSlide2 from "~/assets/images/modules/upgrade/slide_2.png";
import imgSlide3 from "~/assets/images/modules/upgrade/slide_3.png";
import imgSlide4 from "~/assets/images/modules/upgrade/slide_4.png";

export default function SubscriptionCarousel() {
  const items = [
    {
      name: "Đa nền tảng",
      description: "Mua một lần để mai mốt dùng trên mọi thiết bị",
      imageUrl: imgSlide2,
    },
    {
      name: "Không quảng cáo",
      description: "Loại bỏ quảng cáo và đồng bộ dữ liệu",
      imageUrl: imgSlide1,
    },
    {
      name: "Luyện tập",
      description: "Tập thi chứng chỉ HSK",
      imageUrl: imgSlide4,
    },
    {
      name: "Không giới hạn",
      description: "Sổ tay từ vựng không giới hạn",
      imageUrl: imgSlide3,
    },
  ];

  return (
    <Carousel navButtonsAlwaysInvisible={true}>
      {items.map((item) => (
        <Paper
          key={item.name}
          sx={{
            padding: "1rem 2rem",
            borderRadius: "0.8rem",
            border: "none",
          }}
        >
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack>
              <Typography variant="h4">{item.name}</Typography>
              <Typography variant="body1">{item.description}</Typography>
            </Stack>

            <CardMedia
              sx={{
                width: "200px",
                height: "150px",
              }}
              image={item.imageUrl}
            />
          </Stack>
        </Paper>
      ))}
    </Carousel>
  );
}
