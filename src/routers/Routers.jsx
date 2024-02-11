import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/about/About";
import SingIn from "../pages/SingIn/SingIn";
import SingUp from "../pages/SingUp.jsx/SingUp";
import Deshboard from "../pages/Deshbord/Deshboard";
import Project from "../pages/Project/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/singin",
        element: <SingIn />,
      },
      {
        path: "/singup",
        element: <SingUp />,
      },
      {
        path: "/deshboard",
        element: <Deshboard />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
    ],
  },
]);

export default router;
