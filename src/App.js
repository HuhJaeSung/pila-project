import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import NaverApiMap from './components/NaverApiMap';
import './App.css';
import MainData from './components/MainData';
import CourseDetail from './components/CourseDetail';
import { AppStateContext } from './providers/AppStateProviders';

export default function App() {
  const { sidebar } = useContext(AppStateContext);
  console.log('APP', sidebar);
  return (
    <div className="containers">
      <div className="details">
        <Navbar className="navbar" />
        <NaverApiMap className="Map" />
        <MainData />
        <CourseDetail />
      </div>
    </div>
  );
}
