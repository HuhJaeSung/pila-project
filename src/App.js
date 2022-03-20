import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./Home";
import MainData from "./components/MainData";
import AppStateProvider from "./providers/AppStateProviders";

export default function App() {
  return (
    <AppStateProvider>
      <Navbar />
      <div className="container">
        <MainData className="side_bar" />
        <Home className="Map" />
      </div>
      <Footer />
    </AppStateProvider>
  );
}
