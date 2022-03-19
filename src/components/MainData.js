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
        <li>latitude = 1 {positions.position.lat}</li>
        <li>longitude = 2 {positions.position.lon}</li>
      </ul>
    </div>
    </>
  )
}

export default MainData