import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NaverApiMap from "./components/NaverApiMap";
import "./App.css";
import MainData from "./components/MainData";
import CourseDetail from "./components/CourseDetail";

export default function App() {
  return (
    <div className="containers">
      <Navbar className="navbar" />
      <div className="details">
        <NaverApiMap className="Map" />
        <MainData />
        <CourseDetail />
      </div>
      <Footer className="footer" />
    </div>
  );
}
