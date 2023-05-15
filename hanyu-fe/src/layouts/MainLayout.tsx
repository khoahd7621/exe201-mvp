import { Outlet } from "react-router-dom";
import Navbar from "../common/components/navbar/Navbar";

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
