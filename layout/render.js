const navHtml = `
<nav class="nav-container">
  <a href="/" class="nav-logo"></a>
  <a href="/login" class="nav-login-button">로그인</a>
</nav>
`;

const footerHtml = `
<footer class="footer-container">
  <div class="footer-copyright">©codeit - 2024</div>
  <a href="/privacy" class="footer-privacy footer-link">Privacy Policy</a>
  <a href="/faq" class="footer-FAQ footer-link">FAQ</a>
  <ul class="footer-sns">
    <li>
      <a href="https://www.facebook.com" class="footer-sns-link">
        <img
          class="footer-sns-item"
          src="/assets/icons/footer-fb-icon.webp"
          alt="페이스북 로고"
        />
      </a>
    </li>
    <li>
      <a href="https://www.twitter.com" class="footer-sns-link">
        <img
          class="footer-sns-item"
          src="/assets/icons/footer-twt-icon.webp"
          alt="트위터 로고"
        />
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com" class="footer-sns-link">
        <img
          class="footer-sns-item"
          src="/assets/icons/footer-yt-icon.webp"
          alt="유튜브 로고"
        />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com" class="footer-sns-link">
        <img
          class="footer-sns-item"
          src="/assets/icons/footer-ig-icon.webp"
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
