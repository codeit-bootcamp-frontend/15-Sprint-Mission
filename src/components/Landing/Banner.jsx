import { Link } from 'react-router-dom';

const Banner = ({ title, imgSrc, alt, buttonText, buttonLink }) => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h2 className="banner-title">{title}</h2>
        {buttonText && buttonLink && (
          <Link to={buttonLink}>
            <button className="view-button">{buttonText}</button>
          </Link>
        )}
      </div>
      <img src={imgSrc} alt={alt} className="banner-img" />
    </section>
  );
};

export default Banner;
