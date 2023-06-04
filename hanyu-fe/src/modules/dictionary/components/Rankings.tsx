import { Button, Divider, Paper, Stack, Typography } from "@mui/material";

export default function Rankings() {
  return (
    <Paper variant="outlined" sx={{ padding: "1rem", borderRadius: "12px" }}>
      <Typography variant="h6" fontWeight="600" fontSize={16} margin="0">
        Xếp hạng tương tác
      </Typography>
      <Divider sx={{ margin: "16px 0" }} />
      <Stack direction="row" justifyContent="space-between">
        <Button
          variant="outlined"
          sx={{
            height: "30px",
            width: "30%",
            fontSize: "12px",
            "&:hover": {
              border: "1px solid #1976d2",
            },
          }}
        >
          Ngày
        </Button>
        <Button
          variant="text"
          sx={{
            height: "30px",
            width: "30%",
            fontSize: "12px",
            "&:hover": {
              border: "1px solid #1976d2",
            },
          }}
        >
          Tuần
        </Button>
        <Button
          variant="text"
          sx={{
            height: "30px",
            width: "30%",
            fontSize: "12px",
            "&:hover": {
              border: "1px solid #1976d2",
            },
          }}
        >
          Tháng
        </Button>
      </Stack>
      <Divider sx={{ margin: "16px 0" }} />
      <Typography variant="body1">
        Tính năng đang được phát triển, vui lòng quay lại sau bạn nhé!
      </Typography>
    </Paper>
  );
}
