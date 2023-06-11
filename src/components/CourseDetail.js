import React, { useContext } from 'react';
import styles from './CourseDatail.module.css';
import { Link } from 'react-router-dom';
import useActions from '../hooks/useActions';
import useSiderbar from '../hooks/useSiderbar';
import AppStateContext from '../contexts/AppStateContext';

function CourseDetail() {
  const { course, center, sidebar, coursebar } = useContext(AppStateContext);

  const { setMode, setCoursebar } = useActions();

  const handleClose = () => {
    setCoursebar(false);
  };

  return (
    <>
      <div className={!coursebar ? styles.bar : styles.baroff}>
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
                  setMode('UPDATE');
                }}
              >
                강좌 수정하기
              </button>
            </Link>
            <button>지원하기</button>
          </p>
        </div>
      </div>
    </>
  );
}

export default CourseDetail;
