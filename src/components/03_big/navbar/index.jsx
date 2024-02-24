import styles from "./index.module.css";

const NavBar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <img
          src="../../src/assets/smog-solid.svg"
          className={styles.image}
        ></img>
        <p className={styles.heading}>Weather App</p>
        <div>
        <input
          type="search"
          className={styles.search}
          placeholder="Enter city name..."
        ></input>
        <img src="../../src/assets/magnifying-glass-solid.svg" className={styles.icons}/>
        </div>
      </div>
    </>
  );
};

export default NavBar;
