import React from "react";
import styles from "./index.module.css";

const Card = () => {
  return (
    <>
      <div className={styles.imageContainer}>
        <img src="../../src/assets/Clouds.jpeg" className={styles.image} />
        <div className={styles.info}>
          <div className={styles.textOverlay}>
            <img
              src="../../src/assets/sun-regular.svg"
              className={styles.sun}
            />
            <p style={{ fontSize: "6rem" }}>13°</p>
            <p style={{ fontSize: "1.3rem" }}>Gujarat, Jamnagar</p>
          </div>
          <div className={styles.textOverlay}>
            <p
              style={{
                fontSize: "1.3rem",
                fontWeight: "bold",
                marginTop: "8rem",
                marginBottom: "0.7rem",
              }}
            >
              7:00 PM
            </p>
            <p style={{ fontSize: "1.3rem" }}>Sunset Time, Monday</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
