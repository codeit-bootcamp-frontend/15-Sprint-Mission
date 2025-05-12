import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Products from "./pages/Products";
import "./index.css";
import AddItem from "./pages/AddItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "items",
        element: <Products />,
      },
      {
        path: "additem",
        element: <AddItem />,
      },
    ],
  },
]);

export default router;
