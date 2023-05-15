import { Outlet } from "react-router-dom";

import { Navbar } from "~/common/components";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <Outlet />

      <footer>Footer</footer>
    </>
  );
}
