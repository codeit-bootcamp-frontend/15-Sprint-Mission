import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Products from "./pages/Products";
import "./index.css";
import AddItem from "./pages/AddItem";
import ProductDetail from "./pages/ProductDetail";

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
        path: "items/:productId",
        element: <ProductDetail />,
      },
      {
        path: "additem",
        element: <AddItem />,
      },
    ],
  },
]);

export default router;
