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
import "../styles/LayoutStyles.css";
import { adminMenu, doctorMenu, userMenu } from "./../Data/data";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
  };

  const SidebarMenu = user?.isAdmin
    ? adminMenu
    : user?.isDoctor
    ? doctorMenu
    : userMenu;

  return (
    <div className=" bg-white z-50 ">
      {/* Navbar */}
      <div className="w-screen z-50 ">
        <Navbar />
      </div>
      {/* Navbar end */}
      <div className="flex z-50">
        <div className=" bg-slate-900 justify-between w-64">
          <div className="pr-3 pl-2 mt-2 h-screen">
            {SidebarMenu.map((menu) => {
              const isActive = location.pathname === menu.path;
              return (
                <div className="  transition hover:via-sky-700 duration-700 ease-in-out">
                  <div className={`menu-item ${isActive && "active"}`}>
                    <i className={menu.icon}></i>
                    
                    <Link to={menu.path}>{menu.name}</Link>
                  </div>
                </div>
              );
            })}
            <div className="menu-item" onClick={handleLogout}>
              <i className="fa-solid fa-right-from-bracket"></i>
              <Link to="/login">Logout</Link>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          {/* <div className="header">
              <div className="header-content" style={{ cursor: "pointer" }}>
                <Badge
                  count={user && user.notification.length}
                  onClick={() => {
                    navigate("/notification");
                  }}
                >
                  <i className="fa-solid fa-bell"></i>
                </Badge>
                <Link to="/profile">{user?.name}</Link>
              </div>
            </div> */}
          <div className="h-screen shadow-slate-400 bg-white">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
