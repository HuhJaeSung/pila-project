import React from "react";
import { Link } from "react-router-dom";
import useActions from "../hooks/useActions";
import useCenter from "../hooks/useCenter";
import useSiderbar from "../hooks/useSiderbar";
import CourseinfoCard from "./CourseinfoCard";
import "./MainData.css";

function MainData() {
  const center = useCenter();
  const { sidebar } = useSiderbar();
  const { deleteCenter, setMode } = useActions();

  const handleDelelte = () => deleteCenter(center.id);

  const { id, title, location, hours, courses } = center;
  return (
    <>
      <nav className={sidebar ? "centers active" : "centers"}>
        <div className="container">
          <div className="center" key={id}>
            <div className="center__title">
              <h2>{title}</h2>
              <button onClick={handleDelelte}>센터 삭제하기</button>
            </div>
          </div>
          <p className="center__location">위치 : {location}</p>
          <p className="center__hours">영업시간 : {hours}</p>
        </div>
        <div>
          {courses && (
            <div>
              {courses.length === 0 ? (
                <div>
                  <h1> 등록된 강좌가 없습니다.</h1>
                </div>
              ) : (
                <div className="courses">
                  {courses.map((course) => (
                    <CourseinfoCard key={course.id} course={course} />
                  ))}
                </div>
              )}
              <Link to={`form/${center.id}`}>
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
