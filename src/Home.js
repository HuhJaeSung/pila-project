import React, { useState } from "react";
import NavBar from "./Nav";
import NaverApiMap from "./NaverApiMap";

function Home() {
  const [event, setEvent] = useState();

  const handleClick = (e) => {
    console.log(e.target.value);
    setEvent(e.target.value);
  }
  return (
    <div className={"outline"}>
      <div className={"container"}>
        <NavBar onClick={handleClick}></NavBar>
        <h1>Map</h1>
        <NaverApiMap></NaverApiMap>
        <div className={"map"}></div>
      </div>
    </div>
  );
}

export default Home;
