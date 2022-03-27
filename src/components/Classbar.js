import React, { useState } from 'react';
import styles from './Classbar.module.css';
import ClassCard from './ClassCard';

function Classbar({props}) {
  console.log(props)
  return (
    <>
      <div className={props ? styles.bar : styles.de }>
        두번째 사이드 바
        <ul>
          <li>
            <ClassCard />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Classbar;