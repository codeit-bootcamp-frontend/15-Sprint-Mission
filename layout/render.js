const navHtml = `
<nav class="nav-container">
  <a href="/" class="nav-logo"></a>
  <a href="/login" class="nav-login-button">로그인</a>
</nav>
`;

const footerHtml = `
<footer class="footer-container">
  <div class="footer-copyright">©codeit - 2024</div>
  <div class="footer-link">
    <a href="/privacy" class="footer-privacy">Privacy Policy</a>
    <a href="/faq" class="footer-FAQ">FAQ</a>
  </div>
  <ul class="footer-sns">
    <li>
      <a href="https://www.facebook.com" class="footer-sns-link">
        <img
          class="footer-sns-item"
          src="/assets/icons/footer-fb-icon.png"
          alt="페이스북 로고"
        />
      </a>
    </li>
    <li>
      <a href="https://www.twitter.com" class="footer-sns-link">
        <img
          class="footer-sns-item"
          src="/assets/icons/footer-twt-icon.png"
          alt="트위터 로고"
        />
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com" class="footer-sns-link">
        <img
          class="footer-sns-item"
          src="/assets/icons/footer-yt-icon.png"
          alt="유튜브 로고"
        />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com" class="footer-sns-link">
        <img
          class="footer-sns-item"
          src="/assets/icons/footer-ig-icon.png"
          alt="인스타그램 로고"
        />
      </a>
    </li>
  </ul>
</footer>
`;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nav").innerHTML = navHtml;
  document.getElementById("footer").innerHTML = footerHtml;
});
