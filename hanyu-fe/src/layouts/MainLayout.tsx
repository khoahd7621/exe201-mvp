import { Outlet } from "react-router-dom";
import Navbar from "../common/components/Navbar";

export default function MainLayout() {
  return (
    <>
      <header>Header</header>

      <Navbar />

      <Outlet />

      <footer>Footer</footer>
    </>
  );
}
