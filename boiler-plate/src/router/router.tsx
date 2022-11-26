import Main from "../views/Main";
import TaskForm from "../components/Taskform/Taskform";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Poke from "../views/Poke";
import Home from "../views/Home";
import Tasks from "../views/Tasks";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
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
    element: <TaskForm />,
  },
]);
const Router = () => {
  return <RouterProvider router={router} />;
};
export default Router;
