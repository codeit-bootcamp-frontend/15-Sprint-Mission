import Header from "../components/Home/Header";
import MainHeader from "../components/Home/MainHeader";
import ContentSection from "../components/Home/ContentSection";
import MainFooter from "../components/Home/MainFooter";
import Footer from "../components/Home/Footer";

import "../styles/home.css";

function Home() {
  return (
    <>
      <header className="banner">
        <Header />
      </header>

      <main>
        <MainHeader />
        <ContentSection />
        <MainFooter />
      </main>

      <footer className="home-footer">
        <Footer />
      </footer>
    </>
  );
}

export default Home;
