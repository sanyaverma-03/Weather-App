import styles from "./index.module.css";
import moment from "moment";

const Box = ({ data }) => {
  return (
    <>
      <div className={styles.box}>
        <div style={{ display: "flex", gap: "3rem", fontWeight: "bold" }}>
          <p>Last Updated</p>
          <p>Temperature in Farenheit</p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "6rem",
            marginTop: "1rem",
            color: "black",
            fontWeight: "bold",
          }}
        >
          <p style={{ width: "10rem" }}>
            {moment(data.current.last_updated).format(
              "MMMM Do YYYY, h:mm:ss a"
            )}
          </p>
          <p>{`${data.current.temp_f}°`}</p>
        </div>
      </div>
    </>
  );
};

export default Box;
