import React from "react";
import "./Footer.css";
// import { NavLink } from "react-router-dom";
import useActions from "../hooks/useActions";
import AddButton from "./AddButton";

function Footer() {
  const { setMode } = useActions();

  return (
    <>
      <div className='footer-background'>
        <h1>This is Footer AREA!</h1>
        <div>
          <AddButton />
        </div>
      </div>
    </>
  );
}

export default Footer;
