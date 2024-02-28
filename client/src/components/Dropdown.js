// // import { message } from "antd";
// // import React, { useEffect, useRef, useState } from "react";
// // import { useSelector } from "react-redux";
// // import { useLocation, useNavigate } from "react-router-dom";

// // const Dropdown = () => {
// //   const [open, setOpen] = useState(false);
// //   const dropdownRef = useRef(null);
// //   const { user } = useSelector((state) => state.user);
// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     localStorage.clear();
// //     message.success("Logout Successfully");
// //     navigate("/login");
// //   };

// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //         setOpen(false);
// //       }
// //     };

// //     document.addEventListener("click", handleClickOutside);

// //     return () => {
// //       document.removeEventListener("click", handleClickOutside);
// //     };
// //   }, []);

// //   return (
// //     <div ref={dropdownRef}>
// //       {/* <button
// //         onClick={() => setOpen(!open)}
// //         className="p-2 bg-gray-800 text-white"
// //       >
// //         Toggle Dropdown
// //       </button> */}

// //       <button
// //         className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
// //         onClick={() => setOpen(!open)}
// //         id="user-menu-button"
// //         aria-expanded="false"
// //         data-dropdown-toggle="user-dropdown"
// //         data-dropdown-placement="bottom"
// //       >
// //         <span className="sr-only">Open user menu</span>
// //         <img
// //           className="w-11 h-11 rounded-full"
// //           src="images/avatar.jpg"
// //           alt="user photo"
// //         />
// //       </button>

// //       {open && (
// //         // <ul className="mt-2 bg-white border rounded shadow-lg">
// //         //   <li className="px-4 py-2">Item 1</li>
// //         //   <li className="px-4 py-2">Item 2</li>
// //         //   <li className="px-4 py-2">Item 3</li>
// //         // </ul>
// //         <div className=" px-2 py-2">
// //               <span className="block text-sm text-gray-900 dark:text-white">
// //                 {user?.name}
// //               </span>
// //               <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
// //                 {user?.email}
// //               </span>
// //             </div>

// //         <ul className="py-1/2" aria-labelledby="user-menu-button">
// //           <li>
// //             <a
// //               href="#"
// //               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
// //             >
// //               Dashboard
// //             </a>
// //           </li>
// //           <li>
// //             <a
// //               onClick={() => {
// //                 navigate("/profile");
// //               }}
// //               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
// //             >
// //               Settings
// //             </a>
// //           </li>
// //           <li>
// //             <a
// //               onClick={handleLogout}
// //               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
// //             >
// //               Sign out
// //             </a>
// //           </li>
// //         </ul>
// //       )}
// //     </div>
// //   );
// // };

// // export default Dropdown;

// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import "./../../public/images/avatar.jpg"

// const Dropdown = ({ user }) => {
//   const [open, setOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const navigate = useNavigate();

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

//   const handleLogout = () => {
//     navigate("/login");
//   };

//   return (
//     <>
//       <div ref={dropdownRef}>
//         <button
//           className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
//           onClick={() => setOpen(!open)}
//           id="user-menu-button"
//           aria-expanded={open ? "true" : "false"}
//           data-dropdown-toggle="user-dropdown"
//           data-dropdown-placement="bottom"
//         >
//           <span className="sr-only">Open user menu</span>
//           <img
//             className="w-10 h-10 rounded-full"
//             src="./images/avatar.jpg"
//             alt=""
//           />
//         </button>

//         {open && (
//           <ul className="py-1/2" aria-labelledby="user-menu-button">
//             <li>
//               <a
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//               >
//                 Dashboard
//               </a>
//             </li>
//             <li>
//               <a
//                 onClick={() => navigate("/profile")}
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//               >
//                 Settings
//               </a>
//             </li>
//             <li>
//               <a
//                 onClick={handleLogout}
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//               >
//                 Sign out
//               </a>
//             </li>
//           </ul>
//         )}
//       </div>
//     </>
//   );
// };

// export default Dropdown;

import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [compressed, setCompressed] = useState(false);
  const dropdownRef = useRef(null);
  const { user } = useSelector((state) => state.user);
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
    navigate("/login");
  };

  const handleCompressToggle = () => {
    setCompressed((prevCompressed) => !prevCompressed);
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
            className="w-10 h-10 rounded-full"
            src="./images/avatar.jpg"
            alt=""
          />
        </button>

        {/* <button
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={handleCompressToggle}
          aria-controls="navbar-user"
          aria-expanded={compressed ? "true" : "false"}
        >
          <span className="sr-only">Toggle Navbar</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button> */}

        {open && (
          <ul className="py-1/2" aria-labelledby="user-menu-button">
            <li>
              {user && (
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </a>
              )}
            </li>
            <li>
              {user && (
                <a
                  onClick={() => navigate("/profile")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </a>
              )}
            </li>
            <li>
              {user ? (
                <a
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              ) : (
                <a
                  onClick={() => navigate("/login")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign in
                </a>
              )}
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Dropdown;
