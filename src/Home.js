import React from "react";
import NaverApiMap from "./NaverApiMap";
import "./Home.css";
import MainData from "./components/MainData";

function Home(props) {
  return (
    <div className={"outline"}>
      <div className={"container"}>
        <h1>Title Area of Pilates Project</h1>
        <div className="contents">
          <NaverApiMap position = {props}></NaverApiMap>
        </div>
        <div className={"map"}></div>
      </div>
    </div>
  );
}

export default Home;
