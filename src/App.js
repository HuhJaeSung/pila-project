import React from "react";
import Home from "./Home";
import positions from "./data.json";

export default function App() {
  return (
    <div>
      <Home position = {positions} />
    </div>
  );
}

