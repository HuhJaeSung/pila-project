import React from "react";
import useCenter from "../hooks/useCenter";
import styles from "./CourseDatail.module.css";
import { Link } from "react-router-dom";
import useActions from "../hooks/useActions";
import useCourse from "../hooks/useCourse";

function CourseDetail({ coursebar }) {
  const center = useCenter();
  const course = useCourse();
  const { setMode, toggleCourse } = useActions();
  const handleCourseBar = (course) => {
    toggleCourse(course);
  };

  return (
    <>
      <div className={coursebar ? styles.bar : styles.baroff}>
        <div className={styles.container}>
          <p>id: {course.id}</p>
          <p>date: {course.date}</p>
          <p>price: {course.price}</p>
          <p>phonenumber: {course.phonenumber}</p>
          <p>classtype: {course.classtype}</p>
          <p>taxfree: {course.taxfree ? "Tax Free" : "Tax 별도"}</p>
          <p>desc: {course.desc}</p>
          <p>
            <Link to={`form/${center.id}`}>
              <button
                className={styles.UpdateButton}
                onClick={() => {
                  setMode("UPDATE");
                }}
              >
                강좌 수정하기
              </button>
            </Link>
          </p>
        </div>
        <button
          className={styles.CloseButton}
          onClick={() => {
            handleCourseBar(course);
            console.log("Hi");
          }}
        >
          닫기
        </button>
      </div>
    </>
  );
}

export default CourseDetail;
