import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  gap: 10px;
  background-color: #111827;
  padding: 32px 400px;
`;

const FooterWrapper = styled.div`
  max-width: 1110px;
  width: 100%;
  height: 20px;
  justify-content: space-between;

  display: flex;
`;
const FooterCopyright = styled.img`
  width: 112px;
  height: 14px;
  color: #9ca3af;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 12px;
  color: #e5e7eb;

  a {
    color: #9ca3af;
    text-decoration: none;
  }
`;

const FooterSocialIcons = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
const Footer = () => {
  return (
    <Container>
      <FooterWrapper>
        <FooterCopyright src="/images/codeit.png"></FooterCopyright>
        <FooterLinks>
          <a href="/Privacy">Privacy Policy</a>
          <a href="/Faq">FAQ</a>
        </FooterLinks>
        <FooterSocialIcons>
          <a href="https://facebook.com">
            <img src="/images/facebook.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com">
            <img src="/images/twitter.png" alt="Twitter" />
          </a>
          <a href="https://youtube.com">
            <img src="/images/youtube.png" alt="YouTube" />
          </a>
          <a href="https://instagram.com">
            <img src="/images/instagram.png" alt="Instagram" />
          </a>
        </FooterSocialIcons>
      </FooterWrapper>
    </Container>
  );
};
export default Footer;
