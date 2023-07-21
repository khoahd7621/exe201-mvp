import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Stack } from "@mui/material";

import { useAppSelector } from "~/redux/hooks";
import { SystemOverview } from "~/modules/manage/components";

export default function DashboardPage() {
  const auth = useAppSelector((state) => state.auth);
  const profile = useAppSelector((state) => state.profile.user);

  if (!auth.isAuthenticated) {
    toast.error("Bạn cần đăng nhập để truy cập trang này");
    return <Navigate to="/login" replace={true} />;
  }

  if (profile.role !== "ADMIN") {
    toast.error("Bạn không có quyền truy cập trang này");
    return <Navigate to="/" replace={true} />;
  }

  return (
    <Stack>
      <SystemOverview />
    </Stack>
  );
}
