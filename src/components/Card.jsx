import React from "react";

import styles from "./Card.module.css";

const Card = ({ item }) => {
  return (
    <div className={`${styles.cardContainer} ${styles.backDrop}`}>
      <div className={styles.imageContainer}>
        <img className={styles.img} src={item.image} />
      </div>
      <div className={styles.info}>
        <h2>{item.featureName}</h2>
        <p>{item.featureDesc}</p>
      </div>
    </div>
  );
};

export default Card;
