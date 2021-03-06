import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import useActions from "../hooks/useActions";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [classbar, setClassbar] = useState(false);
  const { setMode } = useActions();

  const showSidebar = () => setSidebar(!sidebar);
  const showClassbar = () => setClassbar(!classbar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="nav">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <ul className="menu">
            <li
              onClick={() => {
                setMode("CREATE");
              }}
            >
              <NavLink to="/form">강좌 등록하기</NavLink>
            </li>
            <li>
              <NavLink to="/Menu2">놀아요</NavLink>
            </li>
            <li>
              <NavLink to="/">Menu3</NavLink>
            </li>
          </ul>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose
                  onClick={() => {
                    showSidebar();
                    if (classbar) {
                      showClassbar();
                    }
                  }}
                />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link
                    to={item.path}
                    onClick={() => {
                      if (!classbar) {
                        showClassbar();
                      }
                    }}
                  >
                    {item.icon}

                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
