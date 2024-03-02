import { Button, message } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
// import "../styles/LayoutStyles.css";
import "alpinejs";
import "../styles/Navbar.css";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
  };

  // <header class="text-gray-600 body-font py-2 sticky top-0 bg-white">
  //   <div class="container mx-auto flex px-5 flex-col md:flex-row justify-between items-center">
  //     <div>
  //       <Link
  //         to={"/"}
  //         class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
  //       >
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           fill="none"
  //           stroke="currentColor"
  //           stroke-linecap="round"
  //           stroke-linejoin="round"
  //           stroke-width="2"
  //           class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
  //         </svg>
  //         <span class="ml-2 text-xl">Nirogya</span>
  //       </Link>
  //     </div>
  //     <div className="flex flex-row items-center gap-x-8 font-medium text-md">
  //       <a
  //         href="../#home"
  //         className="hover:text-sky-400 hover:scale-110 transistion-all duration-300"
  //       >
  //         Home
  //       </a>
  //       <a
  //         href="../#about"
  //         className="hover:text-sky-400 hover:scale-110 transistion-all duration-300"
  //       >
  //         About
  //       </a>
  //       <a
  //         href="../#service"
  //         className="hover:text-sky-400 hover:scale-110 transistion-all duration-300"
  //       >
  //         Services
  //       </a>
  //       <a
  //         href=""
  //         className="hover:text-sky-400 hover:scale-110 transistion-all duration-300"
  //       >
  //         Contact
  //       </a>
  //       {/* {Object.keys(props.doct).length > 0 ? (
  //             <div className="flex flex-row items-center justify-center">
  //               <div className="h-12 w-12 rounded-full overflow-hidden m-2">
  //                 <img src="/images/avatar.jpg" />
  //               </div>
  //               <li className="dropdown mr-8">
  //                 <div className="hover:cursor-pointer">
  //                   <h1 className="font-medium text-md">
  //                     {props.doct.fname} {props.doct.lname}
  //                   </h1>
  //                   <h3 className="font-medium text-slate-600 text-sm">
  //                     {props.doct.email}
  //                   </h3>
  //                 </div>
  //                 <div class="dropdown-content">
  //                   // <Link to="/user-search">Dashboard</Link>
  //                   <Link to="/" onClick={logoutUser}>
  //                     Logout
  //                   </Link>
  //                 </div>
  //               </li>
  //             </div>
  //           ) : (
  //             <Link
  //               to={"/login"}
  //               class="inline-flex items-center bg-sky-400 border-0 py-1 px-3 focus:outline-none hover:bg-sky-500 text-white hover:scale-110 transisiton-all duration-300 rounded-full text-base mt-4 md:mt-0"
  //             >
  //               Log In
  //               <i class="ml-2 fa-solid fa-arrow-right"></i>
  //             </Link>
  //           )} */}

  //       {/* <div className="header">
  //             <div className="header-content cursor-pointer">
  //               <Badge
  //                 count={user && user.notification.length}
  //                 onClick={() => {
  //                   navigate("/notification");
  //                 }}
  //               >
  //                 <i className="fa-solid fa-bell"></i>
  //               </Badge>
  //               <Link to="/profile">{user?.name}</Link>
  //             </div>
  //           </div> */}

  //       <div className="flex flex-row items-center justify-center">
  //         <div className="h-12 w-12 rounded-full overflow-hidden m-2">
  //           <img src="/images/avatar.jpg" alt="User Avatar" />
  //         </div>
  //         <li className="dropdown mr-8">
  //           <div className="hover:cursor-pointer">
  //             <h1 className="font-medium text-md">{/* {user.name} */}</h1>
  //             <h3 className="font-medium text-slate-600 text-sm">
  //               {/* {user.email} */}
  //             </h3>
  //           </div>
  //           <div className="dropdown-content">
  //             {/* <Link to="/user-search">Dashboard</Link> */}
  //             <Link to="/" onClick={handleLogout}>
  //               Logout
  //             </Link>

  //           </div>
  //         </li>
  //       </div>
  //     </div>
  //   </div>
  // </header>

  return (
    // <header className=" sticky border-gray-200 dark:bg-gray-900">
    //   <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
    //     <a
    //       // onClick={handleLogout}
    //       className=" pt-4 flex title-font font-medium  text-gray-900 mb-4 md:mb-0 cursor-pointer"
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         stroke="currentColor"
    //         stroke-linecap="round"
    //         stroke-linejoin="round"
    //         stroke-width="2"
    //         className="w-10 h-10 p-2 items-center text-white bg-blue-500 rounded-full"
    //         viewBox="0 0 24 24"
    //       >
    //         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    //       </svg>
    //       <span className="ml-2 items-center pt-1.5 text-xl dark:text-white">
    //         Nirogya
    //       </span>
    //     </a>
    //     <div
    //       className=" flex items-center p-2 md:p-0 mt-1 md:order-2 border border-gray-100 bg-gray-50 md:bg-white space-x-3 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 rounded-lg md:space-x-0 ltr:space-x-reverse"
    //       // className="flex font-medium p-2 md:p-0 mt-1 border border-gray-100 rounded-lg bg-gray-50 ltr:space-x-reverse md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
    //     >

    //       <div className=" p-1 mr-1">
    //         <span
    //           // className="block px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //           className="block pr-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //         >
    //           <span className="mx-2">{user?.name}</span>
    //           <br />
    //           <span className="mx-2">{user?.email}</span>
    //         </span>
    //       </div>
    //       <Dropdown />
    //       {/* <button
    //         data-collapse-toggle="navbar-user"
    //         type="button"
    //         className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //         aria-controls="navbar-user"
    //         aria-expanded="false"
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         <svg
    //           className="w-5 h-5"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 17 14"
    //         >
    //           <path
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M1 1h15M1 7h15M1 13h15"
    //           />
    //         </svg>
    //       </button> */}
    //     </div>
    //     <div
    //       className="items-center z-50 justify-between hidden w-full md:flex md:w-auto md:order-1"
    //       id="navbar-user"
    //     >
    //       <ul className="flex flex-col font-medium p-3 md:p-0 mt-2 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //         <li>
    //           <a
    //             href="#home"
    //             //   className="block py-2 px-3 text-gray-900 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
    //             className="block px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //             aria-current="page"
    //           >
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#about"
    //             className="block px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //           >
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#services"
    //             className="block px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //           >
    //             Services
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#pricing"
    //             className="block px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //           >
    //             Pricing
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#contact"
    //             className="block px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //           >
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </header>
    <header class="text-gray-600 z-50 body-font pt-2 sticky md:bg-white top-0 md:shadow-lg dark:bg-black">
      <div class="container mx-auto flex px-5 flex-col md:flex-row justify-between items-center">
        {/* <div>
            <Link
              to={"/"}
              class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl">Swasthya 24/7</span>
            </Link>
          </div>
          <div className="flex flex-row items-center gap-x-8 font-medium text-md">
            <a
              href="#home"
              className="hover:text-sky-400 hover:scale-110 transistion-all duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-sky-400 hover:scale-110 transistion-all duration-300"
            >
              About
            </a>
            <a
              href="#service"
              className="hover:text-sky-400 hover:scale-110 transistion-all duration-300"
            >
              Services
            </a>
            <a
              href=""
              className="hover:text-sky-400 hover:scale-110 transistion-all duration-300"
            >
              Contact
            </a>
            {/* {Object.keys(props.doct).length > 0 ? (
              <div className="flex flex-row items-center justify-center">
                <div className="h-12 w-12 rounded-full overflow-hidden m-2">
                  <img src="/images/avatar.jpg" />
                </div>
                <li className="dropdown mr-8">
                  <div className="hover:cursor-pointer">
                    <h1 className="font-medium text-md">
                      {props.doct.fname} {props.doct.lname}
                    </h1>
                    <h3 className="font-medium text-slate-600 text-sm">
                      {props.doct.email}
                    </h3>
                  </div>
                  <div class="dropdown-content">
                    <Link to="/user-search">Dashboard</Link>
                    <Link to="/" onClick={logoutUser}>
                      Logout
                    </Link>
                  </div>
                </li>
              </div>
            ) : (
              <Link
                to={"/login"}
                class="inline-flex items-center bg-sky-400 border-0 py-1 px-3 focus:outline-none hover:bg-sky-500 text-white hover:scale-110 transisiton-all duration-300 rounded-full text-base mt-4 md:mt-0"
              >
                Log In
                <i class="ml-2 fa-solid fa-arrow-right"></i>
              </Link>
            )} 
          </div> */}

        <a className=" -ml-8 flex title-font font-medium  md:mb-0 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 p-2 items-center text-white bg-blue-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-2 items-center pt-1.5 text-xl  md:text-black dark:text-white">
            Nirogya
          </span>
        </a>

        <div
          className="flex flex-row items-center -mt-2 mb-2 gap-x-8 font-medium text-md"
          id="navbar-user"
        >
          <div className="flex flex-col font-medium p-3 md:p-0 mt-2 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <a
              href="#home"
              className="block px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              About
            </a>
            <a
              href="#service"
              className="block px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Services
            </a>
            <a
              href="#Available"
              className="block px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Contact
            </a>
          </div>
        </div>

        <div className=" -mr-10 flex items-center p-2 md:p-0 mb-2 mt-2/3 md:order-2 md:text-black dark:text-white md:bg-inherit ltr:space-x-reverse">
          {user ? (
            <>
              <div className=" -mr-8 flex items-center p-2 md:p-0 mb-2 mt-2/3 md:order-2 border border-gray-100 bg-gray-50 md:text-black md:bg-white space-x-3 dark:bg-gray-800 dark:border-gray-700 rounded-lg md:space-x-0 ltr:space-x-reverse">
                <div className=" p-1/2 mr-1">
                  <span className="block pr-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    <span className="mx-2">{user?.name}</span>
                    <br />
                    <span className="mx-2">{user?.email}</span>
                  </span>
                </div>
                <Dropdown />
              </div>
            </>
          ) : (
            <>
              <Button
                className=" h-12 w-20  dark:text-white text-lg font-medium bg-blue-500 "
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
