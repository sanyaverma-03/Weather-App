import styles from "./index.module.css";

const Box = () => {
  return (
    <>
      <div className={styles.box}>
        <div style={{ display: "flex", gap: "3rem",fontWeight:"bold" }}>
          <p>Last Updated</p>
          <p>Temperature in Farenheit</p>
        </div>

        <div>
          <p></p>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default Box;
