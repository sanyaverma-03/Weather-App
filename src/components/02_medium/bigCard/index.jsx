import styles from "./index.module.css";
import SmallCard from "../../01_small/smallCard";

const BigCard = ({data}) => {

  return (
    <>
      <div className={styles.card}>
        <div className={styles.primaryCard}>
          <SmallCard icon="../../src/assets/humidity.png" headline="Humidity" time="2°"/>
          <SmallCard
            icon="../../src/assets/sea.png"
            headline="Sunset"
            time={data.location.localtime}
          />
          
        </div>
        <div  className={styles.secondaryCard}>
        <SmallCard
            icon="../../src/assets/sun-regular (1).svg"
            headline="UV Index"
            time="0 of 10"
          />
          <SmallCard
            icon="../../src/assets/beach.png"
            headline="Sunrise"
            time="06:45AM"
          />
        </div>
      </div>
    </>
  );
};

export default BigCard;
