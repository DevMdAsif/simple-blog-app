import { Outlet } from "react-router-dom";
import Header from "../pages/shared/header/Header";
import FooterCom from "../pages/shared/footer/footer";

function Main() {
  return (
    <div>
      <Header />
      <Outlet />
      <FooterCom />
    </div>
  );
}

export default Main;
