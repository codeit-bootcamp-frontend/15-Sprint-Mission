import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ItemsPage from "@pages/items-page";
import LandingPage from "@pages/landing-page";
import BoardsPage from "@pages/boards-page";
import AddItemPage from "@pages/add-item-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "items",
        element: <ItemsPage />,
      },
      {
        path: "boards",
        element: <BoardsPage />,
      },
      {
        path: "additem",
        element: <AddItemPage />,
      },
    ],
  },
]);

export default router;
