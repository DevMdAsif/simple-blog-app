import { Outlet } from "react-router-dom";
import Header from "../pages/shared/header/Header";

function Main() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Main;
