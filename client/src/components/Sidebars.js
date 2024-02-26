import { message } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { adminMenu, doctorMenu, userMenu } from "../Data/data";
import "../styles/LayoutStyles.css";

const Sidebars = () => {
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
    <>
      <div className=" bg-slate-900 justify-between w-80 ">
        <div className=" pl-2 mt-3">
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
    </>
  );
};

export default Sidebars;
