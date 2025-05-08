import React, { useEffect, useState } from "react";
import styles from "./Item.module.scss";

const ImageWithValidation = ({ styleClass, imageURL, alt = "" }) => {
  const [valid, setValid] = useState(null);

  const checkImage = (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  };

  useEffect(() => {
    let isMounted = true;
    checkImage(imageURL).then((isValid) => {
      if (isMounted) {
        setValid(isValid);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [imageURL]);

  if (valid === null) {
    return null; // 아직 검사 중
  }

  if (valid) {
    return <img src={imageURL} alt={alt} className={styleClass} />;
  }

  return <div className={`${styleClass} ${styles.invalidImage}`} />;
};

export default ImageWithValidation;
