import App from "../views/App";
import App3 from "../views/App3";
import TaskForm from "../components/taskform/Taskform";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App2 from "../views/App2";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/poke",
    element: <App2 />,
  },
  {
    path: "/edit_task/:id",
    element: <TaskForm />,
  },
  {
    path: "/ruta2",
    element: <App3 />,
  },
]);
const Router = () => {
  return <RouterProvider router={router} />;
}
export default Router;
