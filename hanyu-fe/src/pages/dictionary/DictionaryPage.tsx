import { Box, Card, Container, Grid, Link, Paper, Stack, Typography } from "@mui/material";

import { Seo } from "~/common/components";
import {
  BannerCarousel,
  Rankings,
  SearchInput,
  TipsLearning,
} from "~/modules/dictionary/components";
import AppRoutes from "~/router/AppRoutes";

export default function DictionaryPage() {
  return (
    <>
      <Seo
        data={{
          title: "Panda Hanyu | Từ Điển",
          description: "Panda Hanyu Từ Điển",
          url: `https://hanyu-chinesee-learning.vercel.app/${AppRoutes.dictionary}`,
          href: AppRoutes.dictionary,
          thumbnailUrl:
            "https://res.cloudinary.com/khoahd7621/image/upload/v1686117832/banner-2_fkf4w3.png",
        }}
      />

      <Container maxWidth={false} sx={{ padding: "2rem 0" }}>
        <SearchInput />

        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Stack direction="column" spacing={3}>
              <Box>
                <Typography variant="h6" fontWeight="600" fontSize={16} marginBottom="1rem">
                  Từ khóa hot
                </Typography>
                <Stack direction="row" flexWrap="wrap">
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      color: "#707070",
                      backgroundColor: "#fff",
                      padding: "4px 16px",
                      borderRadius: "16px",
                      border: "1px solid #707070",
                      "&:hover": {
                        border: "1px solid #000",
                        color: "#000",
                      },
                    }}
                  >
                    <Typography>实事</Typography>
                  </Link>
                </Stack>
              </Box>
              <Box>
                <Typography variant="h6" fontWeight="600" fontSize={16} marginBottom="1rem">
                  Thành ngữ hôm nay
                </Typography>
                <Card variant="outlined" sx={{ borderRadius: "12px", padding: "16px" }}>
                  <Stack spacing={2}>
                    <Typography variant="body1">
                      明日复明日，明日何其多？我生待明日，万事成蹉跎。
                    </Typography>
                    <Typography variant="body1" fontWeight={600}>
                      Míngrì fù míngrì, míngrì héqí duō? Wǒ shēng dài míngrì, wànshì chéng cuōtuó.
                    </Typography>
                  </Stack>
                </Card>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper variant="outlined" sx={{ padding: "1rem", borderRadius: "12px" }}>
              <Stack spacing={2}>
                <BannerCarousel />

                <TipsLearning />
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Rankings />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
