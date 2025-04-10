import '/src/styles/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='inner02'>
        <p className='copy'>&copy;codeit - 2024</p>
        <nav>
          <a href='#'>개인정보처리방침</a>
          <a href='#'>FAQ</a>
        </nav>
        <ul className='footer-sns'>
          <li>
            <a href='https://www.facebook.com' target='_blank'>
              <img src='images/common/ic_facebook.svg' alt='페이스북' />
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com' target='_blank'>
              <img src='images/common/ic_twitter.svg' alt='트위터' />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com' target='_blank'>
              <img src='images/common/ic_instagram.svg' alt='인스타그램' />
            </a>
          </li>
          <li>
            <a href='https://www.youtube.com' target='_blank'>
              <img src='images/common/ic_youtube.svg' alt='유튜브' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
