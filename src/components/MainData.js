import React, { useState } from "react";
import useCenter from "../hooks/useCenter";
import useSiderbar from "../hooks/useSiderbar";
import CourseinfoCard from "./CourseinfoCard";
import "./MainData.css";

function MainData() {
  const center = useCenter();
  const sidebar = useSiderbar();
  const [coursebar, setCoursebar] = useState(false);

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
            <div className="courses">
              {courses.map((course) => (
                <CourseinfoCard key={course.id} course={course} bar={coursebar} />
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default MainData;
