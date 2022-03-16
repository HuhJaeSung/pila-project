import React from "react";
import NaverApiMap from "./NaverApiMap";
import "./Home.css";

function Home(props) {
  return (
    <div className={"outline"}>
      <div className={"container"}>
        <h1>This is Home.js Title Area</h1>
        <NaverApiMap position = {props}></NaverApiMap>
        <div className={"map"}></div>
      </div>
    </div>
  );
}

export default Home;
