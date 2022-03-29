import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import CourseDetail from "./CourseDetail";
import styles from "./CourseinfoCard.module.css";

// const showDetail = (course) => {
//   console.log("Hi!", `${course}`);
// };

function CourseinfoCard({ course }) {
  const [detailbar, setDetailbar] = useState(false);
  console.log(detailbar, 4);
  const handleDetail = () => {
    setDetailbar(!detailbar);
    render(<CourseDetail info={course} detailbar={detailbar} />);
  };

  return (
    <>
      <div>
        {!course ? (
          <h1>Loading</h1>
        ) : (
          <div>
            <div className={styles.container} onClick={handleDetail}>
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
      {/* {detailbar && <CourseDetail info={course} />} */}
    </>
  );
}

export default CourseinfoCard;
