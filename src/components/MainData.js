import React from "react";
import useCenter from "../hooks/useCenter";
import useSiderbar from "../hooks/useSiderbar";
import "./MainData.css";

function MainData() {
  const center = useCenter();
  const sidebar = useSiderbar();

  const { id, title, location, hours } = center;
  return (
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
    </nav>
  );
}

export default MainData;
