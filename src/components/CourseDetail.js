import React from "react";
import useCenter from "../hooks/useCenter";
import styles from "./CourseDatail.module.css";
import { Link } from "react-router-dom";
import useActions from "../hooks/useActions";

function CourseDetail({ info }) {
  const center = useCenter();
  const { setMode } = useActions();

  return (
    <>
      <div className={styles.card}>
        <ul>
          <li>
            {info && (
              <>
                <p>id: {info.id}</p>
                <p>date: {info.date}</p>
                <p>price: {info.price}</p>
                <p>phonenumber: {info.phonenumber}</p>
                <p>taxfree: {info.taxfree}</p>
              </>
            )}
          </li>
        </ul>
        <Link to={`form/${center.id}`}>
          <button
            onClick={() => {
              setMode("UPDATE");
            }}
          >
            강좌 수정하기
          </button>
        </Link>
      </div>
    </>
  );
}

export default CourseDetail;
