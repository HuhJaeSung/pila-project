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
      <div style={{ flexDirection: "column" }} className="containers">
        <Navbar style={{ flex: 1 }} className="navbar" />
        <div style={{ flex: 8 }} className="details">
          <MainData className="MainData" />
          <NaverApiMap className="Map" />
        </div>
        <Footer style={{ flex: 1 }} className="footer" />
      </div>
    </AppStateProvider>
  );
}
