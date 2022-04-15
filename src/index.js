import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RenderAfterNavermapsLoaded } from "react-naver-maps";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import CourseForm from "./components/CourseForm";
import CenterForm from "./components/CenterForm";
import AppStateProviders from "./providers/AppStateProviders";
import SignUp from "./components/signupComponents/SignUp";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <RenderAfterNavermapsLoaded ncpClientId={"9gnpxruwbr"}>
        <AppStateProviders>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="form">
              <Route index element={<CenterForm />} />
              <Route path=":courseId" element={<CourseForm />} />
            </Route>
            <Route path="SignUp" element={<SignUp />} />
          </Routes>
        </AppStateProviders>
      </RenderAfterNavermapsLoaded>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
