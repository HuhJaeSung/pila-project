import React, { useState } from 'react';
import styles from './Classbar.module.css';

function Classbar() {
  const [classbar, setClassbar] = useState(false);
  const showClassbar = () => setClassbar(!classbar);
  return (
    <>
    <div className={classbar ? styles.bar.active : styles.bar } onClick={showClassbar}>
      Hello, World!
      {console.log(classbar)}
    </div>
    </>
  );
};

export default Classbar;