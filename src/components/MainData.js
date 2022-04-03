import React from "react";
import { Link } from "react-router-dom";
import useActions from "../hooks/useActions";
import useCenter from "../hooks/useCenter";
import useSiderbar from "../hooks/useSiderbar";
import CourseinfoCard from "./CourseinfoCard";
import "./MainData.css";

function MainData() {
  const center = useCenter();
  const sidebar = useSiderbar();
  const { deleteCenter, setMode, setSidebar } = useActions();
  const handleDelelte = () => deleteCenter(center.key);
  const handleClose = () => {
    setSidebar(false);
  };

  const { key, title, location, courses } = center;
  return (
    <>
      <nav className={sidebar ? "centers active" : "centers"}>
        <div className="container">
          <div className="center" key={key}>
            <div className="center__title">
              <h2>{title}</h2>
              <Link to={`form`}>
                <button
                  onClick={() => {
                    setMode("UPDATE");
                  }}
                >
                  센터 수정하기
                </button>
              </Link>
              <button onClick={handleDelelte}>센터 삭제하기</button>
              <div>
                <button onClick={handleClose}>❌</button>
              </div>
              <p className="center__location">위치 : {location}</p>
            </div>
          </div>
        </div>
        <div>
          {courses && (
            <div>
              {courses.length === 0 ? (
                <div>
                  <h1> 등록된 강좌가 없습니다.</h1>
                </div>
              ) : (
                <ul className="courses">
                  {courses.map((course) => (
                    <li key={course.id}>
                      <CourseinfoCard key={course.id} course={course} />
                    </li>
                  ))}
                </ul>
              )}
              <Link to={`form/${center.key}`}>
                <button
                  onClick={() => {
                    setMode("CREATE");
                  }}
                >
                  강좌 등록하기
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default MainData;
