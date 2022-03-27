import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCenter from "../hooks/useCenter";
import useCourses from "../hooks/useCourses";
import useSiderbar from "../hooks/useSiderbar";
import Classbar from "./Classbar";
import CourseinfoCard from "./CourseinfoCard";
import "./MainData.css";

function MainData() {
  const center = useCenter();
  const sidebar = useSiderbar();
  const [classbar, setClassbar] = useState(false);

  const showClassbar = () => {
    console.log(`${classbar}`);
    setClassbar(!classbar)
  }

  const { id, title, location, hours, courses } = center;
  return (
    <>
      <nav className={sidebar ? "centers active" : "centers"}>
        <div className="container">
          <div className="center" key={id}>
            <div className="center__title">
              <h2>{title}</h2>
            </div>
          </div>
          <p className="center__location">위치 : {location}</p>
          <p className="center__hours">영업시간 : {hours}</p>
        </div>
        {/* <div className="courses">
          {courses.map((course) => (
            <CourseinfoCard key={course.id} course={courses} />
          ))}
        </div> */}
        <div>
          {!courses ? (
            <h1>Loading</h1>
          ) : (
            <div className="courses" onClick={() => {
              showClassbar();
              }}>
              {courses.map((course) => (
                <CourseinfoCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </nav>
      {<Classbar course={courses} open={classbar} />}
    </>
  );
}

export default MainData;
