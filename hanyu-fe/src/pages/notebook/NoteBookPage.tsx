import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import { NoteBookCard } from "~/modules/notebook/components";

export default function NoteBookPage() {
  return (
    <Container maxWidth={false} sx={{ margin: "2rem 0" }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h6" fontWeight="bold" marginBottom={1}>
            Free
          </Typography>
          <Grid container spacing={2}>
            <NoteBookCard />
            <NoteBookCard />
            <NoteBookCard />
            <NoteBookCard />
            <NoteBookCard />
            <NoteBookCard />
            <NoteBookCard />
            <NoteBookCard />
          </Grid>
        </Box>

        <Box>
          <Typography variant="h6" fontWeight="bold" marginBottom={1}>
            Premium
          </Typography>
          <Grid container spacing={2}>
            <NoteBookCard />
            <NoteBookCard />
            <NoteBookCard />
            <NoteBookCard />
            <NoteBookCard />
            <NoteBookCard />
            <NoteBookCard />
            <NoteBookCard />
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
}
