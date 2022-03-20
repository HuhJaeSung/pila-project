import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./Home";
import positions from "./data.json";
import MainData from "./components/MainData";
import AppStateProvider from "./providers/AppStateProviders";

export default function App() {
  return (
    <AppStateProvider>
      <Navbar />
      <div className="container">
        <Home position={positions} />
        <MainData className="side-bar" />
      </div>
      <Footer />
    </AppStateProvider>
  );
}
