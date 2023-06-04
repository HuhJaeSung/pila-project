import React from "react";
import { Link, NavLink } from "react-router-dom";
import useActions from "../hooks/useActions";
import useCenter from "../hooks/useCenter";
import useSiderbar from "../hooks/useSiderbar";
import CourseDetail from "./CourseDetail";
import CourseinfoCard from "./CourseinfoCard";
import "./MainData.css";

function MainData() {
  const { key, title, location, courses } = useCenter();
  const { sidebar, coursebar } = useSiderbar();
  const { deleteCenter, setMode, setSidebar, setCoursebar } = useActions();
  const handleDelelte = () => {
    deleteCenter(key);
    setCoursebar(false);
  };
  const handleClose = () => {
    setSidebar(false);
    setCoursebar(false);
    console.log(coursebar);
  };

  return (
    <>
      <nav className={sidebar ? "centers active" : "centers"}>
        <div className='container'>
          <div className='center' key={key}>
            <div className='center__title'>
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
              <div className='close'>
                <button onClick={handleClose}>❌</button>
              </div>
              <p className='center__location'>위치 : {location}</p>
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
                <ul className='courses'>
                  {courses.map((course) => (
                    <li className='classcard' key={course.id}>
                      <CourseinfoCard key={course.id} course={course} />
                    </li>
                  ))}
                </ul>
              )}
              <NavLink to={`form/${key}`}>
                <div
                  className='AddClass'
                  onClick={() => {
                    setMode("CREATE");
                  }}
                ></div>
              </NavLink>
            </div>
          )}
        </div>
      </nav>
      <CourseDetail />
    </>
  );
}

export default MainData;
