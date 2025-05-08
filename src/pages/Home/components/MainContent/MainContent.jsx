import "./MainContent.css";

const MainContent = ({ img, category, header, content }) => {
  const pos = category === "Search" ? "right" : "left";
  return (
    <section className={`main-content ${pos}`}>
      {pos === "left" && (
        <div className="image-section">
          <img src={img} alt="안내 이미지" />
        </div>
      )}
      <div className="text-section">
        <div className="category">{category}</div>

        <div className="content">
          <div className="header-text">
            <p dangerouslySetInnerHTML={{ __html: header }} />
          </div>
          <div className="main-text">
            <p dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </div>
      {pos === "right" && (
        <div className="image-section">
          <img src={img} alt="안내 이미지" />
        </div>
      )}
    </section>
  );
};

export default MainContent;
