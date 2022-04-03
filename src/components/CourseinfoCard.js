import { render } from "@testing-library/react";
import React, { useState } from "react";
import useActions from "../hooks/useActions";
import CourseDetail from "./CourseDetail";
import styles from "./CourseinfoCard.module.css";

function CourseinfoCard({ course }) {
  const { toggleSide } = useActions();
  // console.log(bar, "bar Prop");
  // const [coursebar, setCoursebar] = useState(false);
  // console.log(coursebar, "bar");
  // const handleDetail = () => {
  //   console.log(coursebar, 1);
  //   if (!coursebar) {
  //     setCoursebar(!coursebar);
  //   }
  //   // return console.log(coursebar, 'return')
  //   render(<CourseDetail info={course} detailbar={coursebar} />);
  // };

  return (
    <>
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
              <p className="course__hours">시간 : {course.hours}</p>
            </div>
          </div>
        )}
      </div>
      <CourseDetail info={course} />
    </>
  );
}

export default CourseinfoCard;
