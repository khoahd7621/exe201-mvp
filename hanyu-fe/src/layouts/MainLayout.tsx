import { Outlet } from "react-router-dom";

import { Footer, Navbar } from "~/common/components";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <div style={{ backgroundColor: "#f7f7f7" }}>
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
