import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Stack, Typography } from "@mui/material";

export default function ViewMoreBtn() {
  return (
    <Box
      sx={{
        cursor: "pointer",
        color: "#7d7d7d",
        "&:hover": {
          color: "#000",
        },
      }}
    >
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
        <Typography variant="body2">Xem thêm</Typography>
        <ExpandMoreIcon />
      </Stack>
    </Box>
  );
}
