import React from "react";
import NavBar from "./Nav";
import NaverApiMap from "./NaverApiMap";

function Home() {
  return (
    <div className={"outline"}>
      <div className={"container"}>
        <div className="nav"> Nav Bar </div>
        <h1>Map</h1>
        <NavBar></NavBar>
        <NaverApiMap></NaverApiMap>
        <div className={"map"}></div>
      </div>
    </div>
  );
}

export default Home;
