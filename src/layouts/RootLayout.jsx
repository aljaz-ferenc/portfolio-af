import { Outlet } from "react-router";
import Menu from "../components/Menu";
import "./RootLayouts.scss";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <Menu />
      <Outlet />
    </div>
  );
}
