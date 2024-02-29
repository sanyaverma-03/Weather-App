import React from "react";
import styles from "./index.module.css";
import moment from "moment";

const Card = ({ data }) => {
  return (
    <>
      <div className={styles.imageContainer}>
        <img src="../../src/assets/Clouds.jpeg" className={styles.image} />
        <div className={styles.info}>
          <div className={styles.textOverlay}>
            <img src={data.current.condition.icon} className={styles.sun} />
            <p style={{ fontSize: "6rem" }}>{data.current.temp_c}°</p>
            <p style={{ fontSize: "1.3rem" }}>
              {data.location.name}, {data.location.region}
            </p>
          </div>
          <div className={styles.textOverlay} style={{ lineHeight: "1.5" }}>
            <p
              style={{
                fontSize: "1.3rem",
                fontWeight: "bold",
                marginTop: "13.5rem",
              }}
            >
              {moment(data.location.localtime).format("lll")}
            </p>
            <p style={{ fontSize: "1.3rem" }}>
              {moment(data.location.localtime).format("dddd")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
