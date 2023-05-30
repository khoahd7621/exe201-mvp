import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useMemo } from "react";

import { NoteBookCard } from "~/modules/notebook/components";
import ListNoteBooks from "~/modules/notebook/datas/ListNoteBooks";
import { NoteBook } from "~/modules/notebook/models";

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
  );
}
