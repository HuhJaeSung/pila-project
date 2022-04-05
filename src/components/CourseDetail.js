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
  const { setMode, setCoursebar } = useActions();
  const handleClose = () => {
    setCoursebar(false);
  };

  // const handleDelelte = useCallback(
  //   (key) => {
  //     setCoursebar(false);
  //     const nextItems = center.courses.filter((item) => item.key !== key);
  //     center.courses = nextItems;
  //   },
  //   [center.courses, coursebar]
  // );

  return (
    <>
      <nav className={coursebar ? styles.card : styles.baroff}>
        <div>
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
                {/* <button onClick={handleDelelte(course.key)}>
                  센터 삭제하기
                </button> */}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default CourseDetail;
