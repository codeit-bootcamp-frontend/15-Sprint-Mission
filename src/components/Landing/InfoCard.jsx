const InfoCard = ({ imgSrc, alt, badge, title, description }) => {
  return (
    <div className="home-card-content">
      <img src={imgSrc} alt={alt} className="home-card-img" />
      <div className="home-card-info">
        <div className="home-card-badge">{badge}</div>
        <h2 className="home-card-title">{title}</h2>
        <p className="home-card-description">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
