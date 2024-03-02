// import { Badge, message } from "antd";
// import React from "react";
// import { useSelector } from "react-redux";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import "../styles/LayoutStyles.css";
// import "../styles/Navbar.css";
// import { adminMenu, userMenu } from "./../Data/data";

// const Layout = ({ children }) => {
//   const { user } = useSelector((state) => state.user);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.clear();
//     message.success("Logout Successfully");
//     navigate("/login");
//   };

//   const doctorMenu = [
//     {
//       name: "Home",
//       path: "/",
//       icon: "fa-solid fa-house",
//     },
//     {
//       name: "Appointments",
//       path: "/appointments",
//       icon: "fa-solid fa-list",
//     },
//     {
//       name: "Profile",
//       path: `/doctor/profile/${user?._id}`,
//       icon: "fa-solid fa-user",
//     },
//   ];

//   const SidebarMenu = user?.isAdmin
//     ? adminMenu
//     : user?.isDoctor
//     ? doctorMenu
//     : userMenu;

//   return (
//     <>
//       <div className="main">
//         <div className="layout">
//           <div className="sidebar">
//             <div className="logo">
//               <div className="text-center">
//                 <h1>Nirogya</h1>
//               </div>
//               <hr />
//             </div>
//             <div className="menu">
//               {SidebarMenu.map((menu) => {
//                 const isActive = location.pathname === menu.path;
//                 return (
//                   <div className={`menu-item ${isActive && "active"}`}>
//                     <i className={menu.icon}></i>
//                     <Link to={menu.path}>{menu.name}</Link>
//                   </div>
//                 );
//               })}
//               <div className="menu-item" onClick={handleLogout}>
//                 <i className="fa-solid fa-right-from-bracket"></i>
//                 <Link to="/login">Logout</Link>
//               </div>
//             </div>
//           </div>
//           <div className="content">
//             <div className="header">
//               <div className="header-content" style={{ cursor: "pointer" }}>
//                 <Badge
//                   count={user && user.notification.length}
//                   onClick={() => {
//                     navigate("/notification");
//                   }}
//                 >
//                   <i className="fa-solid fa-bell"></i>
//                 </Badge>
//                 <Link to="/profile">{user?.name}</Link>
//               </div>
//             </div>
//             <div className="body">{children}</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Layout;

// Layout.js

import { message } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { adminMenu, doctorMenu, userMenu } from "../Data/data";
// import "../styles/LayoutStyles.css";
import Navbar from "./Navbar";
import Sidebars from "./Sidebars";

const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
  };

  const ClickItem = user?.isAdmin
    ? adminMenu
    : user?.isDoctor
    ? doctorMenu
    : userMenu;

  const Footer = () => {
    return (
      <>
        <div className=" h-fit z-50 flex flex-col mt-8 items-center gap-y-6  md:bg-white dark:bg-black md:text-black dark:text-white">
          <div className="flex gap-x-4 md:gap-x-12 font-medium md:bg-white dark:bg-black md:text-black dark:text-white text-slate-700 justify-center">
            <a
              href="#home"
              className="hover:text-slate-900 hover:scale-110 transistion-all duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-slate-900 hover:scale-110 transistion-all duration-300"
            >
              About
            </a>
            <a
              href="#service"
              className="hover:text-slate-900 hover:scale-110 transistion-all duration-300"
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:text-slate-900 hover:scale-110 transistion-all duration-300"
            >
              Contact
            </a>
            <Link
              to={"/login"}
              className="hover:text-slate-900 hover:scale-110 transistion-all duration-300 hidden sm:block"
            >
              Join Us
            </Link>
          </div>
          <div className="flex gap-x-6 md:gap-x-12 text-xl text-slate-700 cursor-pointer">
            <i class="fa-brands fa-facebook hover:text-slate-900 hover:scale-125 transition-all duration-300"></i>
            <i class="fa-brands fa-instagram hover:text-slate-900 hover:scale-125 transition-all duration-300"></i>
            <i class="fa-brands fa-twitter hover:text-slate-900 hover:scale-125 transition-all duration-300"></i>
            <i class="fa-brands fa-github hover:text-slate-900 hover:scale-125 transition-all duration-300"></i>
            <i class="fa-brands fa-youtube hover:text-slate-900 hover:scale-125 transition-all duration-300"></i>
          </div>
          <div className="text-sm text-slate-700">
            &#169; 2024 Nirogya Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {/* <header className="h-1/3 overflow-clip w-8/12"> */}
      <Navbar />
      {/* </header> */}
      {/* <div className="main"> */}
      <body className="flex min-h-screen ">
        <Sidebars />
        <div className="w-full pt-3 dark:bg-black md:bg-white">
          {ClickItem.map((Click) => {
            const active = location.pathname === Click.path;
            return (
              <div className={active ? "ClickItem active" : "ClickItem"}>
                {active && (
                  <div className=" text-center text-4xl pb-4 font-semibold md:bg-white md:text-black dark:text-white dark:bg-black">
                    {Click.name}
                  </div>
                )}
              </div>
            );
          })}
          <hr />
          <body className="body px-30 min-h-full min-w-screen md:bg-white dark:bg-black">
            {children}
          </body>
        </div>
      </body>
      {/* </div> */}
      <footer className="min-h-full pt-2 overflow-clip">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
