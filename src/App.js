import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NaverApiMap from "./components/NaverApiMap";
import "./App.css";
import MainData from "./components/MainData";

export default function App() {
  return (
    <div className="containers">
      <Navbar className="navbar" />
      <div className="details">
        <NaverApiMap className="Map" />
        <MainData />
      </div>
      <Footer className="footer" />
    </div>
  );
}
