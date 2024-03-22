import styles from "./MenuBar.module.scss";
import { Link } from "react-router-dom";
const MenuBar = () => {
  return (
    <div className={styles.menuBar}>
      <Link to="/">Home</Link>
      {/* <Link to="/available">Relics</Link> */}
      <Link to="/search">Search</Link>
    </div>
  );
};

export default MenuBar;
