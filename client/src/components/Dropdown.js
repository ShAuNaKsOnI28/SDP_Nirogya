// import { message } from "antd";
// import React, { useEffect, useRef, useState } from "react";
// import { useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";

// const Dropdown = () => {
//   const [open, setOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const { user } = useSelector((state) => state.user);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.clear();
//     message.success("Logout Successfully");
//     navigate("/login");
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     };

//     document.addEventListener("click", handleClickOutside);

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div ref={dropdownRef}>
//       {/* <button
//         onClick={() => setOpen(!open)}
//         className="p-2 bg-gray-800 text-white"
//       >
//         Toggle Dropdown
//       </button> */}

//       <button
//         className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
//         onClick={() => setOpen(!open)}
//         id="user-menu-button"
//         aria-expanded="false"
//         data-dropdown-toggle="user-dropdown"
//         data-dropdown-placement="bottom"
//       >
//         <span className="sr-only">Open user menu</span>
//         <img
//           className="w-11 h-11 rounded-full"
//           src="images/avatar.jpg"
//           alt="user photo"
//         />
//       </button>

//       {open && (
//         // <ul className="mt-2 bg-white border rounded shadow-lg">
//         //   <li className="px-4 py-2">Item 1</li>
//         //   <li className="px-4 py-2">Item 2</li>
//         //   <li className="px-4 py-2">Item 3</li>
//         // </ul>
//         <div className=" px-2 py-2">
//               <span className="block text-sm text-gray-900 dark:text-white">
//                 {user?.name}
//               </span>
//               <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
//                 {user?.email}
//               </span>
//             </div>

//         <ul className="py-1/2" aria-labelledby="user-menu-button">
//           <li>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//             >
//               Dashboard
//             </a>
//           </li>
//           <li>
//             <a
//               onClick={() => {
//                 navigate("/profile");
//               }}
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//             >
//               Settings
//             </a>
//           </li>
//           <li>
//             <a
//               onClick={handleLogout}
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//             >
//               Sign out
//             </a>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Dropdown;

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dropdown = ({ user }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    // Implement your logout logic here
    // Example: sign out the user or redirect to the logout page
    console.log("Logout clicked");
  };

  const NameHandler = () => {
    return (
      <div className="px-2 py-2">
        <span className="block text-sm text-gray-900 dark:text-white">
          {user?.name}
        </span>
        <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
          {user?.email}
        </span>
      </div>
    );
  };

  return (
    <>
      <div ref={dropdownRef}>
        <button
          className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          onClick={() => setOpen(!open)}
          id="user-menu-button"
          aria-expanded={open ? "true" : "false"}
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="w-11 h-11 rounded-full"
            src="/Users/shaunaksoni/Code Editor/vscode/SDP/SDP_Nirogya/SDP_Nirogya/client/public/images/avatar.jpg "
            alt=""
          />
        </button>

        {open && (
          <ul className="py-1/2" aria-labelledby="user-menu-button">
            <li>
              <NameHandler />
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/profile")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                onClick={handleLogout}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Dropdown;
