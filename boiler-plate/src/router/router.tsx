import Main from "../views/Main";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Poke from "../views/Poke";
import Home from "../views/Home";
import Tasks from "../views/Tasks";
import Taskform from "../components/Taskform";
import Info from "../components/Info";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Info />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/poke",
        element: <Poke />,
      },
    ],
  },
  {
    path: "/login",
    element: <Home />,
  },
  {
    path: "/mantenimiento",
    element: <Taskform/>,
  },
]);
const Router = () => {
  return <RouterProvider router={router} />;
};
export default Router;
