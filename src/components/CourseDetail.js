import React from "react";
import useCenter from "../hooks/useCenter";
import styles from "./CourseDatail.module.css";
import { Link } from "react-router-dom";
import useActions from "../hooks/useActions";
import useCourse from "../hooks/useCourse";
import useSiderbar from "../hooks/useSiderbar";

function CourseDetail() {
  const center = useCenter();
  const course = useCourse();
  const { coursebar } = useSiderbar();
  const { setMode, toggleCourse, setCoursebar } = useActions();
  const handleCourseBar = (course) => {
    toggleCourse(course);
  };
  const handleClose = () => {
    setCoursebar(false);
  };

  return (
    <>
      <div className={coursebar ? styles.bar : styles.baroff}>
        <div className={styles.container}>
          <div className="close">
            <button onClick={handleClose}>❌</button>
          </div>
          <p>id: {course.id}</p>
          <p>date: {course.date}</p>
          <p>price: {course.price}</p>
          <p>phonenumber: {course.phonenumber}</p>
          <p>classtype: {course.classtype}</p>
          <p>taxfree: {course.taxfree}</p>
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
        <div className={styles.buttonContainer}>
          <button className={styles.CloseButton} onClick={handleClose}>
            닫기
          </button>
        </div>
      </div>
    </>
  );
}

export default CourseDetail;
