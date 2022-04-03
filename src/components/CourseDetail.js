import React from "react";
import useCenter from "../hooks/useCenter";
import styles from "./CourseDatail.module.css";
import { Link } from "react-router-dom";
import useActions from "../hooks/useActions";
import useSiderbar from "../hooks/useSiderbar";

function CourseDetail({ info }) {
  const center = useCenter();
  const { setMode } = useActions();
  const { coursebar } = useSiderbar();
  console.log("coursebar", coursebar)
  console.log(info, "info")

  return (
    <>
      <div className={coursebar ? styles.card : styles.baroff}>
        <ul>
          <li>
            {coursebar && (
              <>
                <p>id: {info.id}</p>
                <p>date: {info.date}</p>
                <p>price: {info.price}</p>
                <p>phonenumber: {info.phonenumber}</p>
                <p>taxfree: {info.taxfree}</p>
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
