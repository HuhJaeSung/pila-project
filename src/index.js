import React from "react";
import { NavermapsProvider } from "react-naver-maps";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import CourseForm from "./components/CourseForm";
import CenterForm from "./components/CenterForm";
import AppStateProviders from "./providers/AppStateProviders";
import SignUp from "./components/signupComponents/SignUp";
import SignIn from "./components/signupComponents/SignIn";
import LoggedInApp from "./components/LoggedInComponents/SignInMap";
import { AuthProvider } from "./providers/AuthContext";

// Before  :  ReactDOM 라이브러리의 render 함수로
//  => ( <App /> 컴포넌트를 root 위치에 )
// ReactDOM
// .render( <App />, document.getElementById("root"))

// After  :  react-dom/client 라이브러리의 createRoot 함수로(신규),
//  => createRoot(root위치에).render(<App /> 컴포넌트를)
// createRoot(document.getElementById("root"))
// .render(<App />);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider>
        <NavermapsProvider ncpClientId={"9gnpxruwbr"}>
          <AppStateProviders>
            {/* children */}
            <Routes>
              <Route path='/' element={<App />} />
              <Route path='form'>
                <Route index element={<CenterForm />} />
                <Route path=':courseId' element={<CourseForm />} />
              </Route>
              <Route path='SignUp' element={<SignUp />} />
              <Route path='SignIn' element={<SignIn />} />
              {/* <Route path='LoggedInApp' element={<LoggedInApp />} /> */}
            </Routes>
            {/* children */}
          </AppStateProviders>
        </NavermapsProvider>
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>
);

// ReactDOM.render(
//   <BrowserRouter>
//     <React.StrictMode>
//       <RenderAfterNavermapsLoaded ncpClientId={"9gnpxruwbr"}>
//         <AppStateProviders>
//           <Routes>
//             <Route path='/' element={<App />} />
//             <Route path='form'>
//               <Route index element={<CenterForm />} />
//               <Route path=':courseId' element={<CourseForm />} />
//             </Route>
//             <Route path='SignUp' element={<SignUp />} />
//             <Route path='SignIn' element={<SignIn />} />
//           </Routes>
//         </AppStateProviders>
//       </RenderAfterNavermapsLoaded>
//     </React.StrictMode>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
