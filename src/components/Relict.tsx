import { Relict as RelictType } from "../types/Relict";
import styles from "./Relict.module.scss";
// import uniqid from "uniqid";
import LocationTable from "./LocationTable";
import RewardsTable from "./RewardsTable";

const Relict = (relictData: RelictType) => {
  const baseLink = `https://cdn.warframestat.us/img/${relictData.imageName}`;

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h2>{relictData.name}</h2>
        <div className={styles.imageContainer}>
          <img src={baseLink} alt={relictData.name} />
        </div>
      </div>

      <div className={styles.rowContainer}>
        <div>
          <h3>Lokacje</h3>
          <div className={styles.locationTable}>
            <LocationTable data={relictData.locations} />
          </div>
        </div>
        <div>
          <h3>Nagrody</h3>
          <div className={styles.rewardsTable}>
            <RewardsTable data={relictData.rewards} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relict;
