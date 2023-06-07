import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useMemo } from "react";
import { Seo } from "~/common/components";

import { NoteBookCard } from "~/modules/notebook/components";
import ListNoteBooks from "~/modules/notebook/datas/ListNoteBooks";
import { NoteBook } from "~/modules/notebook/models";
import AppRoutes from "~/router/AppRoutes";

export default function NoteBookPage() {
  const listNormalNotBooks: NoteBook[] = useMemo(
    () => ListNoteBooks.filter((item) => item.isPremium === false),
    []
  );
  const listPremiumNotBooks: NoteBook[] = useMemo(
    () => ListNoteBooks.filter((item) => item.isPremium === true),
    []
  );

  return (
    <>
      <Seo
        data={{
          title: "Panda Hanyu | Sổ Tay",
          description: "Panda Hanyu Sổ Tay",
          url: `https://hanyu-chinesee-learning.vercel.app/${AppRoutes.notebook}`,
          href: AppRoutes.notebook,
          thumbnailUrl:
            "https://res.cloudinary.com/khoahd7621/image/upload/v1686117832/banner-2_fkf4w3.png",
        }}
      />

      <Container maxWidth={false} sx={{ margin: "2rem 0" }}>
        <Stack spacing={4}>
          <Box>
            <Typography variant="h6" fontWeight="bold" marginBottom={1}>
              Miễn phí
            </Typography>
            <Grid container spacing={2}>
              {listNormalNotBooks.map((item) => (
                <NoteBookCard key={item.id} notebook={item} />
              ))}
            </Grid>
          </Box>

          <Box>
            <Typography variant="h6" fontWeight="bold" marginBottom={1}>
              Premium
            </Typography>
            <Grid container spacing={2}>
              {listPremiumNotBooks.map((item) => (
                <NoteBookCard key={item.id} notebook={item} />
              ))}
            </Grid>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
