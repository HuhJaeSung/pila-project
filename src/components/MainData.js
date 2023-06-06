import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useActions from '../hooks/useActions';
import useCenter from '../hooks/useCenter';
import useSiderbar from '../hooks/useSiderbar';
import CourseDetail from './CourseDetail';
import CourseinfoCard from './CourseinfoCard';
import './MainData.css';
import Footer from './Footer';

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
      <nav className={sidebar ? 'centers active' : 'centers'}>
        <div className="coursebar_container">
          <div className="center" key={key}>
            <div>
              <h2>{title}</h2>
              <Link to={`form`}>
                <button
                  onClick={() => {
                    setMode('UPDATE');
                  }}
                >
                  센터 수정하기
                </button>
              </Link>
              <button onClick={handleDelelte}>센터 삭제하기</button>
              <div className="close">
                <button onClick={handleClose}>❌</button>
              </div>
              <p className="center__location">위치 : {location}</p>
            </div>
          </div>
          <div className="course_list_container">
            {courses && (
              <div className="course_container">
                {courses.length === 0 ? (
                  <div>
                    <h1> 등록된 강좌가 없습니다.</h1>
                  </div>
                ) : (
                  <ul className="courses">
                    {courses.map((course) => (
                      <li className="classcard" key={course.id}>
                        <CourseinfoCard key={course.id} course={course} />
                      </li>
                    ))}
                  </ul>
                )}

                <NavLink to={`form/${key}`}>
                  <div className="AddContainer">
                    <div
                      className="AddClass"
                      onClick={() => {
                        setMode('CREATE');
                      }}
                    >
                      <div className="PlusIcon"></div>
                    </div>
                  </div>
                </NavLink>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </nav>
      <CourseDetail />
    </>
  );
}

export default MainData;
