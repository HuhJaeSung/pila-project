import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import useActions from '../hooks/useActions';
import { useAuth } from '../providers/AuthContext';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [classbar, setClassbar] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  // const { setMode } = useActions();

  const showSidebar = () => setSidebar(!sidebar);
  const showClassbar = () => setClassbar(!classbar);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="nav">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <ul className="menu">
            <li className="isLoggedIn">
              {isLoggedIn ? '로그인 상태' : '비로그인 상태'}
            </li>
            <li>
              <NavLink className="Button" to="/">
                놀아요
              </NavLink>
            </li>
            <li>
              <NavLink className="Button" to="/SignIn">
                {isLoggedIn ? '로그아웃' : '로그인'}
              </NavLink>
            </li>
            <li>
              <NavLink className="Button" to="/SignUp">
                회원가입
              </NavLink>
            </li>
          </ul>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
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
