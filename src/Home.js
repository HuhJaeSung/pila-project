import React, { useState } from "react";
import NaverApiMap from "./NaverApiMap";

function Home() {
  return (
    <div className={"outline"}>
      <div className={"container"}>
        <h1>Map</h1>
        <NaverApiMap></NaverApiMap>
        <div className={"map"}></div>
      </div>
    </div>
  );
}

export default Home;
