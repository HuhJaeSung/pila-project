import React from "react";
import Footer from "./components/Footer";
import MainData from "./components/MainData";
import Navbar from "./components/Navbar";
import NaverApiMap from "./components/NaverApiMap";
import AppStateProvider from "./providers/AppStateProviders";
import "./App.css";

export default function App() {
  return (
    <AppStateProvider>
      <div className="containers">
        <Navbar className="navbar" />
        <div className="details">
          <MainData className="MainData" />
          <NaverApiMap className="Map" />
        </div>
        <Footer className="footer" />
      </div>
    </AppStateProvider>
  );
}
