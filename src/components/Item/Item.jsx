import styles from "./Item.module.scss";
import heart from "../../image/heart.svg";
import ImageWithValidation from "./imageInvalid";

export default function Item({ item, listType }) {
  const styleClass = `${
    listType === "best" ? styles["image--inBest"] : styles["image--inAll"]
  } ${item.images.length === 0 ? styles.noImage : ""}`;

  console.log(item.name);
  return (
    <div className={styles.item}>
      <ImageWithValidation
        styleClass={styleClass}
        imageURL={item.images}
        alt="프로필 이미지"
      />

      <div className={styles.item__description}>
        <h3 className={styles["item__name"]}>{item.name}</h3>
        <p className={styles["item__price"]}>{item.price}</p>
        <div className={styles["item__favoriteCount"]}>
          <img src={heart} alt="heart icon" />
          <span>{item.favoriteCount}</span>
        </div>
      </div>
    </div>
  );
}
