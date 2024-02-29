import styles from "./index.module.css";
import SmallCard from "../../01_small/smallCard";
import Box from "../../01_small/smallbox";

const BigCard = ({data}) => {

  return (
    <>
    <div style={{display:"flex",flexDirection:"column"}}>
      <div className={styles.card}>
        <div className={styles.primaryCard}>
          <SmallCard icon="../../src/assets/humidity.png" headline="Humidity" time={`${data.current.humidity}°`}/> 
          <SmallCard
            icon="../../src/assets/sea.png"
            headline="Condition  "
            time={data.current.condition.text}
          />
          
        </div>
        <div  className={styles.secondaryCard}>
        <SmallCard
            icon="../../src/assets/sun-regular (1).svg"
            headline="UV Index"
            time={data.current.uv}
          />
          <SmallCard
            icon="../../src/assets/beach.png"
            headline="Feels like"
            time={`${data.current.feelslike_c}°`}
          />
        </div>
      </div>
      <Box data={data}/>
      </div>
    </>
  );
};



export default BigCard;

