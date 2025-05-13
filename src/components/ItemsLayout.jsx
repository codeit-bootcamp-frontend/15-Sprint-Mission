import Header from "./Header";
import { Outlet } from "react-router";
function ItemsLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default ItemsLayout;
