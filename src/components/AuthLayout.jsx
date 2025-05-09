import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { Logo } from "./Logo";
import logo from "/logo/logo.png";
import { css } from "@emotion/react";
import { mobile } from "@/styles/utils/mixins";

const mainContainer = (isLogin) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${isLogin
    ? css`
        width: 640px;
        height: 618px;
      `
    : css`
        width: 100%;
        height: 100%;
      `}

  ${mobile(css`
    width: 100%;
    margin: 0 auto;
  `)};
`;

function AuthLayout() {
  useEffect(() => {
    const isLogin = location.pathname.includes("login");

    // html과 body에 기본 스타일 적용
    document.documentElement.style.cssText = `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
    `;

    document.body.style.cssText = `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
    `;

    // 반응형 마진 적용
    const updateMargin = () => {
      const width = window.innerWidth;
      if (width >= 768) {
        // desktop & tablet
        document.body.style.margin = isLogin ? "231px 640px" : "60px auto";
      } else {
        // mobile
        document.body.style.margin = isLogin
          ? "80px 16px 231px"
          : "24px 16px 179px 16px";
      }
    };

    updateMargin();
    window.addEventListener("resize", updateMargin);

    return () => {
      // 스타일 초기화
      document.documentElement.style.cssText = "";
      document.body.style.cssText = "";
      window.removeEventListener("resize", updateMargin);
    };
  }, []);

  const isLogin = location.pathname.includes("login");

  return (
    <main css={mainContainer(isLogin)}>
      <Logo srcLogo={logo} />
      <Outlet />
    </main>
  );
}

export default AuthLayout;
