import { useState } from "react";
import {
  Button,
  CircularProgress,
  FormControl,
  OutlinedInput,
} from "@mui/material";
import styles from "./SearchBox.module.scss";
import { searchData } from "../utils/searchData";
import ItemBox from "./ItemBox";
import uniqid from "uniqid";

const SearchBox = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const search = async () => {
    setIsFetching(true);
    const res = await searchData(value);
    setData(res);
    setIsFetching(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <FormControl sx={{ width: "50vw" }}>
          <OutlinedInput
            placeholder="Please enter name of item"
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              padding: "5px",
              margin: "10px",
            }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </FormControl>
        <Button
          disabled={isFetching}
          variant="contained"
          color="primary"
          sx={{
            padding: "10px",
            margin: "10px",
            width: "150px",
          }}
          onClick={search}
        >
          <span>{isFetching ? <CircularProgress /> : "Search"}</span>
        </Button>
      </div>

      {data.length > 0 && (
        <div className={styles.dataContainer}>
          {data.map((item) => (
            <div key={uniqid()}>
              <ItemBox data={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
