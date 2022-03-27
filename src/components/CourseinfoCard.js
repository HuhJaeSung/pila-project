import React from "react";
import styles from './CourseinfoCard.module.css';

function CourseinfoCard({ course }) {
  return (
    <div>
      {!course ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <div className={styles.container}>
            <div className="course" key={course.id}>
              <div className="course__title">
                <h2>{course.date}</h2>
              </div>
            </div>
            <p className="course__location">폰번호 : {course.phonenumber}</p>
            <p className="course__hours">시간 : {course.date}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseinfoCard;
