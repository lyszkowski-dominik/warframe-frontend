import { Entry } from "../types/ItemBox";
import styles from "./ItemBox.module.scss";
import uniqid from "uniqid";
import CheckIcon from "@mui/icons-material/Check";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

type Props = {
  data: Entry;
};

const ItemBox = ({ data }: Props) => {
  return (
    <div className={styles.container}>
     
      <div className={styles.itemBox}>
        <h2>{data.name}</h2>
        <p className={styles.description}>{data.description}</p>
        <div className={styles.table}>
        <div className={styles.imageBox}>
        <img
          src={`https://cdn.warframestat.us/img/${data.imageName}`}
          alt={data.name}
        />
      </div>
          <table>
            <thead>
              <tr>
                <th>Component</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              {data.components.map((component) => (
                <tr key={uniqid()}>
                  <td className={styles.imgCell}>
                    {component.name}{" "}
                    <img
                      src={`https://cdn.warframestat.us/img/${component.imageName}`}
                    ></img>
                  </td>
                  <td>{component.itemCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.tableSide}>
            <p>Type: {data.type}</p>
            <p>{data.tradable ? "Tradable" : "Not Tradable"}</p>
            <p>Build Price: {data.buildPrice}</p>
            <p>Build Time: {data.buildTime / 60 / 60} hours</p>
          </div>
        </div>
        {data.abilities ? (
          <div className={styles.drops}>
            <table className={styles.dropTable}>
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Location</th>
                  <th>Available</th>
                  <th>Rarity</th>
                  <th>Chance</th>
                </tr>
              </thead>
              {data.components.map((component) => {
                return component.drops.map((drop) => (
                  <tbody key={uniqid()}>
                    <tr>
                      <td className={styles.imgCell}>
                        {component.name}{" "}
                        <img
                          src={`https://cdn.warframestat.us/img/${component.imageName}`}
                        ></img>
                      </td>
                      <td>{drop.location}</td>
                      <td>
                        {data.name.includes("Prime") ? (
                          drop.available ? (
                            <CheckIcon
                              color="success"
                              sx={{
                                fontSize: 40,
                              }}
                            />
                          ) : (
                            <ReportGmailerrorredIcon
                              color="error"
                              sx={{
                                fontSize: 40,
                              }}
                            />
                          )
                        ) : (
                          <CheckIcon
                            color="success"
                            sx={{
                              fontSize: 40,
                            }}
                          />
                        )}
                      </td>
                      <td>{drop.rarity}</td>
                      <td>{Math.ceil(drop.chance * 100)}%</td>
                    </tr>
                  </tbody>
                ));
              })}
            </table>
          </div>
        ) : (
          <div className={styles.drops}>
            <table className={styles.dropTable}>
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Location</th>
                  <th>Available</th>
                  <th>Rarity</th>
                  <th>Chance</th>
                </tr>
              </thead>
              {data.components.map((component) => {
                const imgSrc = `https://cdn.warframestat.us/img/${component.imageName}`;
                return component.drops.map((drop) => (
                  <tbody key={uniqid()}>
                    <tr>
                      <td className={styles.imgCell}>
                        {component.name} <img src={imgSrc}></img>
                      </td>
                      <td>{drop.location}</td>
                      <td>
                      {data.name.includes("Prime") ? (
                          drop.available ? (
                            <CheckIcon
                              color="success"
                              sx={{
                                fontSize: 40,
                              }}
                            />
                          ) : (
                            <ReportGmailerrorredIcon
                              color="error"
                              sx={{
                                fontSize: 40,
                              }}
                            />
                          )
                        ) : (
                          <CheckIcon
                            color="success"
                            sx={{
                              fontSize: 40,
                            }}
                          />
                        )}
                      </td>
                      <td>{drop.rarity}</td>
                      <td>{Math.ceil(drop.chance * 100)}%</td>
                    </tr>
                  </tbody>
                ));
              })}
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemBox;
