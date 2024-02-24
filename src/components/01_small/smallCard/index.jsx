import styles from "./index.module.css";

const SmallCard = ({ icon, headline, time }) => {
  return (
    <>
      <div className={styles.card}>
        <img src={icon} className={styles.iconImage} />
        <div>
          <p className={styles.txt}>{headline}</p>
          <p className={styles.txt} style={{fontWeight:"bold"}}>{time}</p>
        </div>
      </div>
    </>
  );
};

export default SmallCard;
