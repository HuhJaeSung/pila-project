import React from "react";
import styles from "./MainData.module.css";

function MainData() {
  return (
    <>
      <div className={styles.bar}>
        <ul className={styles.ul}>
          <div>Side bar AREA</div>
          <li>latitude = 1 {}</li>
          <li>longitude = 2 {}</li>
        </ul>
      </div>
    </>
  );
}

export default MainData;
