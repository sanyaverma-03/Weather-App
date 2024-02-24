import styles from "./index.module.css";

const SmallCard = ({ icon, headline, time }) => {
  return (
    <>
      <div>
        <img src={icon} />
        <div>
          <p>{headline}</p>
          <p>{time}</p>
        </div>
      </div>
    </>
  );
};

export default SmallCard;
