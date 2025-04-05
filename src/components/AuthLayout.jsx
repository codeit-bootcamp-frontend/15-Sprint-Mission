import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <>
      <p>auth 레이아웃 입니다</p>
      <Outlet />
    </>
  );
}

export default AuthLayout;
