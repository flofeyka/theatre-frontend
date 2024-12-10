import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="h-full min-h-screen w-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
