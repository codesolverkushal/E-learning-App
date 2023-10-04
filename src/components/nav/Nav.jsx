import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import style from "./Nav.module.css";

function Nav() {
  return (
    <>
      <nav>
        <div className={style.nav_container}>
          <div className={style.nav_title_wrapper}>
            {/* Second Task */}
            <Link to="/">
              <img
                className={style.logo}
                src="https://i.ibb.co/pzBBnxR/logo.png"
               
                alt="logo"
              />
              
            </Link>
            <h4>Knowledge Junction</h4>
          </div>
          <div className={style.nav_details}>
            
             <button>
              <NavLink to="/">
                {({isActive})=>(isActive ?"Dashboard":"Go To Home")}
              </NavLink>
             </button>

            <button>
               {/* Second Task */}
              <NavLink to="/courses">
                {({ isActive }) => (isActive ? "On Courses" : "Go To Courses")}
              </NavLink>

              
             </button>

       
             
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;

//  <img
//    alt='cart-icon'
//    src='https://cdn-icons-png.flaticon.com/512/4903/4903482.png'
//    className={`${style.cart_icon} ${style.icon} `}
//  />;
