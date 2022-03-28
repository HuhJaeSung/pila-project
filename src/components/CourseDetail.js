import React from "react";
import styles from "./CourseDatail.module.css";

function CourseDetail({ info }) {
  return (
    <>
      <div className={styles.card}>
        <ul>
          <li>
            {info && (
              <>
                <p>id: {info.id}</p>
                <p>date: {info.date}</p>
                <p>price: {info.price}</p>
                <p>phonenumber: {info.phonenumber}</p>
                <p>taxfree: {info.taxfree}</p>
              </>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}

export default CourseDetail;
