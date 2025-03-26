import '@/pages/home/home.css';

export default function Home() {
  return (
    <>
      <header className="home-header">
        <div className="home-header-content">
          <h1 className="logo-container">
            <a href="/">
              <img src="/images/panda_face.svg" alt="logo" className="logo" />
              <img
                src="/images/logo_typo.svg"
                alt="panda market"
                className="logo-typo"
              />
            </a>
          </h1>
          <a href="/signin" className="signin-button">
            로그인
          </a>
        </div>
      </header>

      <main>
        <section className="banner">
          <div className="banner-content">
            <h2 className="banner-title">
              일상의 모든 물건을
              <span className="change-line mobile-line">거래해 보세요</span>
            </h2>
            <a href="/items">
              <button className="view-button">구경하러 가기</button>
            </a>
          </div>
          <img
            src="/images/home_top.svg"
            alt="A panda mascot waving its hand"
            className="banner-img"
          />
        </section>

        <section className="home-cards">
          <div className="home-card-content">
            <img
              src="/images/home_01.svg"
              alt="Two pandas looking at a green shirt"
              className="home-card-img"
            />
            <div className="home-card-info">
              <div className="home-card-badge">Hot item</div>
              <h2 className="home-card-title">
                인기 상품을 <span className="change-line">확인해 보세요</span>
              </h2>
              <p className="home-card-description">
                가장 HOT한 중고거래 물품을
                <br />
                판다 마켓에서 확인해 보세요
              </p>
            </div>
          </div>

          <div className="home-card-content">
            <img
              src="/images/home_02.svg"
              alt="Searching a product to buy"
              className="home-card-img"
            />
            <div className="home-card-info">
              <div className="home-card-badge">Search</div>
              <h2 className="home-card-title">
                구매를 원하는{' '}
                <span className="change-line">상품을 검색하세요</span>
              </h2>
              <p className="home-card-description">
                구매하고 싶은 물품은 검색해서 <br /> 쉽게 찾아보세요
              </p>
            </div>
          </div>

          <div className="home-card-content">
            <img
              src="/images/home_03.svg"
              alt="Upload a product to sell"
              className="home-card-img"
            />
            <div className="home-card-info">
              <div className="home-card-badge">Register</div>
              <h2 className="home-card-title">
                판매를 원하는{' '}
                <span className="change-line">상품을 등록하세요</span>
              </h2>
              <p className="home-card-description">
                어떤 물건이든 판매하고 싶은 상품을
                <br /> 쉽게 등록하세요
              </p>
            </div>
          </div>
        </section>

        <section className="bottom">
          <div className="banner">
            <div className="banner-content">
              <h2 className="banner-title">
                믿을 수 있는 <br /> 판다마켓 중고 거래
              </h2>
            </div>
            <img
              src="/images/home_bottom.svg"
              alt="Two pandas trading products"
              className="banner-img"
            />
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="copyright">&copy;codeit - 2024</div>
          <a href="/privacy" className="privacy">
            Privacy Policy
          </a>
          <a href="/faq" className="faq">
            FAQ
          </a>
          <ul className="social-media">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/facebook.svg" alt="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/twitter.svg" alt="twitter" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/youtube.svg" alt="youtube" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/instagram.svg" alt="instagram" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
