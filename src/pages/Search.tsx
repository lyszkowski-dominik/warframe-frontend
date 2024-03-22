import SearchBox from "../components/SearchBox";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div>
      <h1>
        Warframe Relics
        <div className={styles.container}>
          <SearchBox />
        </div>
      </h1>
    </div>
  );
};

export default Search;
