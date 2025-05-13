import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import GlobalStyle from "./GlobalStyle";
import Header from "@/layouts/Header";
import { breakpoints } from "@constants/breakpoints";
import useDeviceSize from "@hooks/useDeviceSize";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ResponsiveMain = styled.main`
  // 모바일 & 전체
  width: 90vw;
  margin: 2.5rem 0;

  // 태블릿
  @media (min-width: ${breakpoints.mobile}) {
    width: 95vw;
  }

  // 데스크탑
  @media (min-width: ${breakpoints.desktop}) {
    width: 60vw;
  }
`;

const App = () => {
  const { isMobile } = useDeviceSize();

  return (
    <Layout>
      <GlobalStyle />

      <Header />
      <ResponsiveMain>
        <Outlet />
      </ResponsiveMain>

      <ToastContainer
        toastClassName="custom-toast"
        progressClassName="custom-progress-bar"
        position={isMobile ? "top-center" : "bottom-right"}
        style={isMobile && { marginTop: "7rem" }}
        autoClose={3000}
        limit={4}
      />
    </Layout>
  );
};

export default App;
