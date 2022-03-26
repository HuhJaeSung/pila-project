import React from 'react';
import styles from './Classbar.module.css';

function Classbar({ index }) {
  console.log(index)
  return (
    <>
    <div className={styles.bar}>
      Hello, World!
    </div>
    </>
  );
};

export default Classbar;