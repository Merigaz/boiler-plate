import Main from "../views/Main";
import App3 from "../views/App3";
import TaskForm from "../components/Taskform/Taskform";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import App2 from "../views/App2";
import Home from "../views/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[
      {
        path: "/poke",
        element: <App2 />,
      }
    ]
  },
  {
    path: "/login",
    element: <App2 />,
  },
  {
    path: "/mantenimiento",
    element: <TaskForm />,
  }
]);
const Router = () => {
  return <RouterProvider router={router} />;
}
export default Router;
