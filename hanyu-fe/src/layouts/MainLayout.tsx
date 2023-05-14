import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <header>Header</header>

      <Outlet />

      <footer>Footer</footer>
    </>
  );
}
