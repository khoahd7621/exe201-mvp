import { Avatar, Card, Grid, Stack, Typography } from "@mui/material";

export default function NoteBookCard() {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card
        variant="outlined"
        sx={{
          padding: "0.8rem",
          cursor: "pointer",
          "&:hover": {
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          },
        }}
      >
        <Stack direction="row" gap={1} alignItems="center">
          <Avatar children={"T"} sx={{ width: 32, height: 32 }} />
          <Stack
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            flexGrow={1}
          >
            <Typography fontSize={14} fontWeight="bold" noWrap>
              HSK 1
            </Typography>

            <Stack direction="row" justifyContent="space-between">
              <Typography fontSize={12}>100w</Typography>
              <Typography fontSize={12}>01-08-2019</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </Grid>
  );
}
