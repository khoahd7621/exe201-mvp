import { Container } from "@mui/material";

import { Seo } from "~/common/components";
import { TranslateBox } from "~/modules/translate/components";
import AppRoutes from "~/router/AppRoutes";

export default function TranslatePage() {
  return (
    <>
      <Seo
        data={{
          title: "Panda Hanyu | Dịch thuật",
          description: "Panda Hanyu dịch thuật",
          url: `https://hanyu-chinesee-learning.vercel.app/${AppRoutes.translate}`,
          href: AppRoutes.translate,
          thumbnailUrl:
            "https://res.cloudinary.com/khoahd7621/image/upload/v1686117832/banner-2_fkf4w3.png",
        }}
      />

      <Container maxWidth={false} sx={{ margin: "2rem 0" }}>
        <TranslateBox />
      </Container>
    </>
  );
}
