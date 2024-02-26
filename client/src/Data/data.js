import { useSelector } from "react-redux";

const Selector = () => {
  return useSelector((state) => state.user);
};
const { user } = { Selector };

export const userMenu = [
  {
    name: "Home",
    path: "/",
    icon: "fa-solid fa-house",
  },
  {
    name: "Book Appointments",
    path: "/appointments",
    icon: "fa-solid fa-list",
  },
  {
    name: "Apply Doctor",
    path: "/apply-doctor",
    icon: "fa-solid fa-user-doctor",
  },
  {
    name: "User Profile",
    path: "/profile",
    icon: "fa-solid fa-user",
  },
  {
    name: "User Notification",
    path: "/notification",
    icon: "fa-solid fa-bell",
  },
];

// admin menu
export const adminMenu = [
  // {
  //   name: "Home",
  //   path: "/",
  //   icon: "fa-solid fa-house",
  // },

  {
    name: "Doctors List",
    path: "/admin/Doctors",
    icon: "fa-solid fa-user-doctor",
  },
  {
    name: "Users list",
    path: "/admin/Users",
    icon: "fa-solid fa-user",
  },
  {
    name: "Admin Profile",
    path: "/profile",
    icon: "fa-solid fa-user",
  },
  {
    name: "Admin Notification",
    path: "/notification",
    icon: "fa-solid fa-bell",
  },
];

export const doctorMenu = [
  // {
  //   name: "Home",
  //   path: "/",
  //   icon: "fa-solid fa-house",
  // },
  {
    name: "Patient Appointments",
    path: "/doctor-appointment",
    icon: "fa-solid fa-list",
  },
  {
    name: "Doctor Profile",
    path: `/doctor/profile/${user?._id}`,
    icon: "fa-solid fa-user",
  },
  {
    name: "Doctor Notification",
    path: "/notification",
    icon: "fa-solid fa-bell",
  },
];
