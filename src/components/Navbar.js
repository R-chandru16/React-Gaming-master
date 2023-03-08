
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import { NavLink, Routes, Route } from 'react-router-dom';


import "./Navbar.css";
import React, { useState, useEffect, useRef } from "react";


function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    const loginTime = localStorage.getItem("loginTime")
      ? new Date(localStorage.getItem("loginTime"))
      : new Date();

    // Update the login time in the header
    const loginTimeDiv = document.getElementById("login-time");
    loginTimeDiv.innerHTML += loginTime.toLocaleString();

    // Update the timer every second
    const timerDiv = document.getElementById("timer");
    const interval = setInterval(() => {
      const elapsed = Date.now() - loginTime.getTime();
      const hours = Math.floor(elapsed / (1000 * 60 * 60));
      const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);
      timerDiv.innerHTML = `Time elapsed: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);

    // Store the login time in local storage
    localStorage.setItem("loginTime", loginTime);

    return () => {
      clearInterval(interval);
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const handleLogout = () => {

    window.location = '/login';
    // any other logout logic here
  }

  return (
    <>
      <IconContext.Provider value={{ color: "eeeeee" }}>
        <div className="navbar">
          <header className="header">
            <h3>CODINGMARKET</h3>
          </header>
          <Link to="#" className="menuBars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

        </div>

        <div className='menu-container' ref={menuRef}>
          <div className='menu-trigger' onClick={() => { setOpen(!open) }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzNg8Qf5iIU9m4e7qT6Zuv82CU3FqXYOoESRdPukzzgw&s.jpg" alt="React Image" />

          </div>
          <div>
            <div id="login-time">Logged in since: </div>
            <div id="timer">Time elapsed: 00:00:00</div>

          </div>

          <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
            <h3>chandru R<br /><span></span></h3>
            <ul>
              <li className='dropdownItem' onClick={() => console.log('My Profile clicked')}>
                <a>My Profile</a>
              </li>
              <li className='dropdownItem' onClick={() => console.log('Edit Profile clicked')}>
                <a>Edit Profile</a>
              </li>
              <li className='dropdownItem' onClick={() => console.log('Inbox clicked')}>
                <a>Inbox</a>
              </li>
              <li className='dropdownItem' onClick={handleLogout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>

        <nav className={sidebar ? "navMenu active" : "navMenu"}>
          <ul className="navMenuItems"  >
            {/* onClick={showSidebar} */}
            <li className="navbarToggle">
              <Link to="#" className="menuBars">

              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
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

function DropdownItem(props) {
  return (
    <div>

      <li className='dropdownItem'>

        {/* <img src={props.img}></img> */}

        <a> {props.text} </a>

      </li>
    </div>
  );
}
export default Navbar;
