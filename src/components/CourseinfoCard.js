import React, { useState } from "react";
import CourseDetail from "./CourseDetail";
import styles from "./CourseinfoCard.module.css";

// const showDetail = (course) => {
//   console.log("Hi!", `${course}`);
// };

function CourseinfoCard({ course }) {
  const [infobar, setInfobar] = useState(false);
  const handleBar = () => {
    setInfobar(!infobar);
  };

  console.log(infobar);
  return (
    <>
      <div>
        {!course ? (
          <h1>Loading</h1>
        ) : (
          <div>
            <div className={styles.container} onClick={handleBar}>
              <div className="course" key={course.id}>
                <div className="course__title">
                  <h2>{course.date}</h2>
                </div>
              </div>
              <p className="course__location">폰번호 : {course.phonenumber}</p>
              <p className="course__hours">시간 : {course.hours}</p>
            </div>
          </div>
        )}
      </div>
      {infobar && <CourseDetail info={course} />}
    </>
  );
}

export default CourseinfoCard;
