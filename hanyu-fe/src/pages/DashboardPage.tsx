import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Stack } from "@mui/material";

import { Seo } from "~/common/components";
import { SystemOverview } from "~/modules/manage/components";
import { useAppSelector } from "~/redux/hooks";
import AppRoutes from "~/router/AppRoutes";

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
    <>
      <Seo
        data={{
          title: "Panda Hanyu | Quản lý - Tổng quan",
          description: "Panda Hanyu quản lý - Trang tổng quan",
          url: `https://hanyu-chinesee-learning.vercel.app/${AppRoutes.manage}`,
          href: AppRoutes.manage,
          thumbnailUrl:
            "https://res.cloudinary.com/khoahd7621/image/upload/v1686117832/banner-2_fkf4w3.png",
        }}
      />

      <Stack>
        <SystemOverview />
      </Stack>
    </>
  );
}
