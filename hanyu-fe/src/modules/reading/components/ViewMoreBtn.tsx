import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Stack, Typography } from "@mui/material";

type Props = {
  onClick: () => void;
};

export default function ViewMoreBtn({ onClick }: Props) {
  return (
    <Box
      sx={{
        cursor: "pointer",
        color: "#7d7d7d",
        "&:hover": {
          color: "#000",
        },
      }}
      onClick={onClick}
    >
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
        <Typography variant="body2">Xem thêm</Typography>
        <ExpandMoreIcon />
      </Stack>
    </Box>
  );
}
