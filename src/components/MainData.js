import React from 'react';
import styles from './MainData.module.css';

function MainData(positions) {
  return (
    <>
    <div className={styles.bar}>
      <ul className={styles.ul}>
        <div>
          Side bar AREA
        </div>
        <li>latitude = {positions.lat}</li>
        <li>longitude = {positions.lon}</li>
      </ul>
    </div>
    </>
  )
}

export default MainData