import styles from "./styles/ItemDescription.module.css";

export default function ItemDescription({ items }) {
  return (
    <section className={styles.section1}>
      <img
        className={styles.img}
        src={items.images[0] || "/no_image.png"}
        alt={items.name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/no_image.png";
        }}
      />

      <div className={styles.descriptionContainer}>
        <div className={styles.descriptionTop}>
          <div className={styles.kebabContainer}>
            <h1 className={styles.name}>{items.name}</h1>
            <button>
              <img src="/ic_kebab.svg" />
            </button>
          </div>

          <span className={styles.price}>{items.price.toLocaleString()}원</span>
        </div>

        <div className={styles.descriptionBottom}>
          <div className={styles.descriptionTitle}>
            <span className={styles.introName}>상품 소개</span>
            <p className={styles.intro}>{items.description}</p>
          </div>

          <div className={styles.tagContainer}>
            <span className={styles.tagTitle}>상품 태그</span>
            <ul className={styles.tagContent}>
              {items.tags.map((tag, index) => (
                <li className={styles.tag} key={index}>
                  # {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.descriptionFooter}>
          <div className={styles.profileContainer}>
            <img
              className={styles.profileImg}
              src="/ic_profile.svg"
              alt="프로필사진"
            />
            <div className={styles.profileContent}>
              <span className={styles.profileName}>{items.ownerNickname}</span>
              <span className={styles.date}>
                {items.createdAt.slice(0, 10).replace(/-/g, ".")}
              </span>
            </div>
          </div>
          <div className={styles.borderLeft}>
            <button className={styles.heartContainer}>
              <img
                className={styles.heart}
                src="/heart_icon.svg"
                alt="하트 아이콘"
              />
              <span className={styles.heartCount}>{items.favoriteCount}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
