import { useState } from "react";
import { toast } from "react-toastify";

import { Button, Stack, TextField } from "@mui/material";

import profileApi from "../apis/profileApi";

type Field = {
  value: string;
  error: string;
};

export default function ChangePassword() {
  const [sending, setSending] = useState<boolean>(false);
  const [oldPassword, setOldPassword] = useState<Field>({
    value: "",
    error: "",
  });
  const [newPassword, setNewPassword] = useState<Field>({
    value: "",
    error: "",
  });
  const [confirmPassword, setConfirmPassword] = useState<Field>({
    value: "",
    error: "",
  });

  const validate = () => {
    let isValid = true;
    if (oldPassword.value.trim() === "") {
      setOldPassword({ ...oldPassword, error: "Vui lòng nhập mật khẩu cũ" });
      isValid = false;
    }
    if (newPassword.value.trim() === "") {
      setNewPassword({ ...newPassword, error: "Vui lòng nhập mật khẩu mới" });
      isValid = false;
    }
    if (confirmPassword.value.trim() === "") {
      setConfirmPassword({
        ...confirmPassword,
        error: "Vui lòng nhập xác nhận mật khẩu",
      });
      isValid = false;
    }
    if (newPassword.error !== "" || confirmPassword.error !== "" || oldPassword.error !== "") {
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setSending(true);
    profileApi
      .changePassword({
        oldPassword: oldPassword.value,
        newPassword: newPassword.value,
        confirmPassword: confirmPassword.value,
      })
      .then(() => {
        toast.success("Đổi mật khẩu thành công");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Đổi mật khẩu thất bại. Vui lòng thử lại sau.");
      })
      .finally(() => {
        setSending(false);
        setConfirmPassword({ value: "", error: "" });
        setNewPassword({ value: "", error: "" });
        setOldPassword({ value: "", error: "" });
      });
  };

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
          disabled={sending}
          value={oldPassword.value}
          error={oldPassword.error !== ""}
          helperText={oldPassword.error}
          onChange={(e) => {
            if (newPassword.value !== "" && e.target.value === newPassword.value) {
              setOldPassword({ value: e.target.value, error: "" });
              setNewPassword({
                value: newPassword.value,
                error: "Mật khẩu mới trùng với mật khẩu cũ",
              });
            } else if (e.target.value.trim() === "") {
              setOldPassword({
                value: e.target.value,
                error: "Vui lòng nhập mật khẩu cũ",
              });
              setNewPassword({ value: newPassword.value, error: "" });
            } else {
              setOldPassword({ value: e.target.value, error: "" });
              setNewPassword({ value: newPassword.value, error: "" });
            }
          }}
        />
        <TextField
          label="Mật khẩu mới"
          id="new-password"
          placeholder="Nhập mật khẩu mới"
          defaultValue=""
          variant="filled"
          type="password"
          size="small"
          disabled={sending}
          value={newPassword.value}
          error={newPassword.error !== ""}
          helperText={newPassword.error}
          onChange={(e) => {
            if (e.target.value.trim() === "") {
              setNewPassword({
                value: e.target.value,
                error: "Vui lòng nhập mật khẩu mới",
              });
            } else if (e.target.value === oldPassword.value) {
              setNewPassword({
                value: e.target.value,
                error: "Mật khẩu mới trùng với mật khẩu cũ",
              });
            } else if (confirmPassword.value !== "" && e.target.value !== confirmPassword.value) {
              setConfirmPassword({
                value: confirmPassword.value,
                error: "Xác nhận mật khẩu không khớp",
              });
              setNewPassword({ value: e.target.value, error: "" });
            } else if (confirmPassword.value !== "" && e.target.value === confirmPassword.value) {
              setConfirmPassword({ value: confirmPassword.value, error: "" });
              setNewPassword({ value: e.target.value, error: "" });
            } else if (e.target.value.length < 6) {
              setNewPassword({
                value: e.target.value,
                error: "Mật khẩu phải có ít nhất 6 ký tự",
              });
            } else {
              setNewPassword({ value: e.target.value, error: "" });
            }
          }}
        />
        <TextField
          label="Xác nhận mật khẩu"
          id="confirm-password"
          placeholder="Nhập xác nhận mật khẩu"
          defaultValue=""
          variant="filled"
          type="password"
          size="small"
          disabled={sending}
          value={confirmPassword.value}
          error={confirmPassword.error !== ""}
          helperText={confirmPassword.error}
          onChange={(e) => {
            if (e.target.value.trim() === "") {
              setConfirmPassword({
                value: e.target.value,
                error: "Vui lòng nhập xác nhận mật khẩu",
              });
            } else if (newPassword.value !== "" && newPassword.value !== e.target.value) {
              setConfirmPassword({
                value: e.target.value,
                error: "Xác nhận mật khẩu không khớp",
              });
            } else {
              setConfirmPassword({ value: e.target.value, error: "" });
            }
          }}
        />
        <Button
          variant="contained"
          sx={{ padding: "0.6rem 0" }}
          onClick={handleSubmit}
          disabled={sending}
        >
          Đổi mật khẩu
        </Button>
      </Stack>
    </form>
  );
}
