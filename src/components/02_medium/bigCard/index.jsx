import styles from "./index.module.css";
import SmallCard from "../../01_small/smallCard";

const BigCard = () => {
  return (
    <>
      <div>
        <div>
          <SmallCard />
          <SmallCard />
        </div>
        <div>
          <SmallCard />
          <SmallCard />
        </div>
      </div>
    </>
  );
};

export default BigCard;
