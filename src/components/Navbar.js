import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css'
import styles from './Navbar.module.css'
import { IconContext } from 'react-icons'


function getLinkStyle({ isActive }) {
  return {
    textDecoration: isActive ? 'underline': undefined,
  }
}

function Navbar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <ul className={styles.menu}>
          <li><NavLink to="/Menu1" style={getLinkStyle}>Menu1</NavLink></li>
          <li><NavLink to="/Menu2" style={getLinkStyle}>Menu2</NavLink></li>
          <li><NavLink to="/" style={getLinkStyle}>Menu3</NavLink></li>
        </ul>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className='navbar-toggle'>
            <Link to="#" className='menu-bars'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>  
              </li>
            )
          })}
        </ul>
      </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar