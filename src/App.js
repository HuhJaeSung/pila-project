import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./Home";
import positions from "./data.json";
import MainData from "./components/MainData";

export default function App() {
  return (
    <>
      <Navbar />
      <Home position = {positions} />
      <Footer />
    </>
  );
}

