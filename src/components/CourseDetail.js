import React from "react";
import useCenter from "../hooks/useCenter";
import styles from "./CourseDatail.module.css";
import { Link } from "react-router-dom";
import useActions from "../hooks/useActions";
import useCourse from "../hooks/useCourse";

function CourseDetail({ coursebar }) {
  const center = useCenter();
  const course = useCourse();
  const { setMode, setCoursebar } = useActions();
  const handleClose = () => {
    setCoursebar(false);
  };
  return (
    <>
      <div className={coursebar ? styles.card : styles.baroff}>
        <div className="close">
          <button onClick={handleClose}>❌</button>
        </div>
        <ul>
          <li>
            {coursebar && (
              <>
                <p>id: {course.id}</p>
                <p>date: {course.date}</p>
                <p>price: {course.price}</p>
                <p>phonenumber: {course.phonenumber}</p>
                <p>classtype: {course.classtype}</p>
                <p>taxfree: {course.taxfree}</p>
                <p>desc: {course.desc}</p>
              </>
            )}
          </li>
          <li>
            <Link to={`form/${center.id}`}>
              <button
                onClick={() => {
                  setMode("UPDATE");
                }}
              >
                강좌 수정하기
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CourseDetail;
