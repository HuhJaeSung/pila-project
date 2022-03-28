import React from "react";
import styles from "./Classbar.module.css";
import ClassCard from "./CourseDetail";

function Classbar({ course, open }) {
  console.log(course);
  return (
    <>
      <div className={open ? styles.bar : styles.de}>
        두번째 사이드 바
        <ul>
          <li>
            <ClassCard />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Classbar;
