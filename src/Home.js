import React from "react";
import NaverApiMap from "./NaverApiMap";
import "./Home.css";
import Classbar from "./components/Classbar";

function Home(props) {
  return (
    <div className={"outline"}>
      <div className={"container"}>
        <h1>Title Area of Pilates Project</h1>
        <div className="contents">
          <Classbar />
          <NaverApiMap position={props}></NaverApiMap>
        </div>
        <div className={"map"}></div>
      </div>
    </div>
  );
}

export default Home;
