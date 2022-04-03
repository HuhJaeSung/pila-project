import { render } from "@testing-library/react";
import React, { useState } from "react";
import useActions from "../hooks/useActions";
import useCourse from "../hooks/useCourse";
import useSiderbar from "../hooks/useSiderbar";
import CourseDetail from "./CourseDetail";
import styles from "./CourseinfoCard.module.css";

function CourseinfoCard({ index, course }) {
  const { toggleCourse } = useActions();
  const { coursebar } = useSiderbar();
  const handleCourseBar = (course) => {
    toggleCourse(course);
  }

  return (
    <>
      <div>
        {!course ? (
          <h1>Loading</h1>
        ) : (
          <div>
            <div className={styles.container} onClick={() => {
              handleCourseBar(course);
            }}
            >
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
      {coursebar && <CourseDetail info={course} coursebar={coursebar} />}
    </>
  );
}

export default CourseinfoCard;
