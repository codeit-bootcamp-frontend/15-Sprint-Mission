import { Route } from "react-router-dom";
import Item from "../pages/Item.jsx";
import AddItem from "../pages/AddItem.jsx";
import ItemDetail from "../pages/ItemDetail.jsx";

const itemRoutes = (
  <Route path="/item" element={<Item />} key="item">
    <Route path="additem" element={<AddItem />} />
    <Route path=":productId" element={<ItemDetail />} />
  </Route>
);

export default itemRoutes;
