import { Outlet } from "react-router";
import { useEffect } from "react";
import { Logo } from "./Logo";
import logo from "@/assets/logo/logo.png";
import styles from "@/styles/components/AuthLayout.module.scss";

function AuthLayout() {
  useEffect(() => {
    // 마운트 시 클래스 추가
    document.body.classList.add("authBody");
    document.documentElement.classList.add("authHtml");

    if (location.pathname.includes("login")) {
      document.body.classList.add("login");
    } else if (location.pathname.includes("signup")) {
      document.body.classList.add("signup");
    }

    // 언마운트 시 클래스 제거
    return () => {
      document.body.classList.remove("authBody", "login", "signup");
      document.documentElement.classList.remove("authHtml");
    };
  }, []);

  const mainClass = location.pathname.includes("login") ? styles.loginMain : "";

  return (
    <main className={mainClass}>
      <Logo
        linkClass={styles.logoLink}
        imgClass={styles.logoImg}
        srcLogo={logo}
      />
      <Outlet />
    </main>
  );
}

export default AuthLayout;
