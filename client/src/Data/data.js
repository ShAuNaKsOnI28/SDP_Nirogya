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
    name: "Appointments",
    path: "/appointments",
    icon: "fa-solid fa-list",
  },
  {
    name: "Apply Doctor",
    path: "/apply-doctor",
    icon: "fa-solid fa-user-doctor",
  },
  {
    name: "Profile",
    path: "/profile",
    icon: "fa-solid fa-user",
  },
  {
    name: "Notification",
    path: "/notification",
    icon: "fa-solid fa-bell",
  },
];

// admin menu
export const adminMenu = [
  {
    name: "Home",
    path: "/",
    icon: "fa-solid fa-house",
  },

  {
    name: "Doctors",
    path: "/admin/Doctors",
    icon: "fa-solid fa-user-doctor",
  },
  {
    name: "Users",
    path: "/admin/Users",
    icon: "fa-solid fa-user",
  },
  {
    name: "Profile",
    path: "/profile",
    icon: "fa-solid fa-user",
  },
  {
    name: "Notification",
    path: "/notification",
    icon: "fa-solid fa-bell",
  },
];

export const doctorMenu = [
  {
    name: "Home",
    path: "/",
    icon: "fa-solid fa-house",
  },
  {
    name: "Appointments",
    path: "/doctor-appointment",
    icon: "fa-solid fa-list",
  },
  {
    name: "Profile",
    path: `/doctor/profile/${user?._id}`,
    icon: "fa-solid fa-user",
  },
  {
    name: "Notification",
    path: "/notification",
    icon: "fa-solid fa-bell",
  },
];
