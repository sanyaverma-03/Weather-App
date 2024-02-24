import styles from "./index.module.css";
import SmallCard from "../../01_small/smallCard";

const BigCard = () => {
  return (
    <>
      <SmallCard icon="../../src/assets/humidity.png" headline="Humidity" />
      <SmallCard
        icon="../../src/assets/sun-regular.svg"
        headline="UV Index"
        time="0 of 10"
      />
      <SmallCard
        icon="../../src/assets/sea.png"
        headline="Sunset"
        time="7:00PM"
      />
      <SmallCard
        icon="../../src/assets/beach.png"
        headline="Sunrise"
        time="06:45AM"
      />
    </>
  );
};

export default BigCard;
