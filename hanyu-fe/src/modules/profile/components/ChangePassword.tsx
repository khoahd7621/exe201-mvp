import { Button, Stack, TextField } from "@mui/material";

export default function ChangePassword() {
  return (
    <form>
      <Stack direction="column" spacing={3}>
        <TextField
          label="Mật khẩu cũ"
          id="old-password"
          placeholder="Nhập mật khẩu cũ"
          defaultValue=""
          variant="filled"
          type="password"
          size="small"
        />
        <TextField
          label="Mật khẩu mới"
          id="new-password"
          placeholder="Nhập mật khẩu mới"
          defaultValue=""
          variant="filled"
          type="password"
          size="small"
        />
        <TextField
          label="Xác nhận mật khẩu"
          id="confirm-password"
          placeholder="Nhập xác nhận mật khẩu"
          defaultValue=""
          variant="filled"
          type="password"
          size="small"
        />
        <Button variant="contained" sx={{ padding: "0.6rem 0" }}>
          Đổi mật khẩu
        </Button>
      </Stack>
    </form>
  );
}
