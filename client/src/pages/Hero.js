// import React, { useState } from "react";

// const Hero = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="relative bg-white pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px]">
//         <div className="container">
//           <div className="-mx-4 flex flex-wrap">
//             <div className="w-full px-4 lg:w-5/12">
//               <div className="hero-content">
//                 <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
//                   Kickstart Startup Website with TailGrids
//                 </h1>
//                 <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
//                   With TailGrids, business and students thrive together.
//                   Business can perfectly match their staffing to changing demand
//                   throughout the dayed.
//                 </p>
//                 <ul className="flex flex-wrap items-center">
//                   <li>
//                     <a
//                       href="/#"
//                       className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7"
//                     >
//                       Get Started
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/#"
//                       className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-[#464646] hover:text-primary dark:text-white"
//                     >
//                       <span className="mr-2">
//                         <svg
//                           width="24"
//                           height="25"
//                           viewBox="0 0 24 25"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <circle cx="12" cy="12.6152" r="12" fill="#3758F9" />
//                           <rect
//                             x="7.99893"
//                             y="14.979"
//                             width="8.18182"
//                             height="1.63636"
//                             fill="white"
//                           />
//                           <rect
//                             x="11.2717"
//                             y="7.61523"
//                             width="1.63636"
//                             height="4.09091"
//                             fill="white"
//                           />
//                           <path
//                             d="M12.0898 14.1606L14.9241 11.0925H9.25557L12.0898 14.1606Z"
//                             fill="white"
//                           />
//                         </svg>
//                       </span>
//                       Download App
//                     </a>
//                   </li>
//                 </ul>
//                 <div className="clients pt-16">
//                   <h6 className="mb-6 flex items-center text-xs font-normal text-body-color dark:text-dark-6">
//                     Some Of Our Clients
//                     <span className="ml-3 inline-block h-px w-8 bg-body-color"></span>
//                   </h6>

//                   <div className="flex items-center space-x-4">
//                     <SingleImage
//                       href="#"
//                       imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
//                     />

//                     <SingleImage
//                       href="#"
//                       imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
//                     />

//                     <SingleImage
//                       href="#"
//                       imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="hidden px-4 lg:block lg:w-1/12"></div>
//             <div className="w-full px-4 lg:w-6/12">
//               <div className="lg:ml-auto lg:text-right">
//                 <div className="relative z-10 inline-block pt-11 lg:pt-0">
//                   <img
//                     src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
//                     alt="hero"
//                     className="max-w-full lg:ml-auto"
//                   />
//                   <span className="absolute -bottom-8 -left-8 z-[-1]">
//                     <svg
//                       width="93"
//                       height="93"
//                       viewBox="0 0 93 93"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
//                       <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
//                       <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
//                       <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
//                       <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
//                       <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
//                       <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
//                       <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
//                       <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
//                       <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
//                       <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
//                       <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
//                       <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
//                       <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
//                       <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
//                       <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
//                       <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
//                       <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
//                       <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
//                       <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
//                       <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
//                       <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
//                       <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
//                       <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
//                       <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
//                     </svg>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;

// const SingleImage = ({ href, imgSrc }) => {
//   return (
//     <>
//       <a href={href} className="flex w-full items-center justify-center">
//         <img src={imgSrc} alt="brand image" className="h-10 w-full" />
//       </a>
//     </>
//   );
// };

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className={`absolute left-0 top-0 z-20 flex w-full items-center`}>
//       <div className="container">
//         <div className="relative -mx-4 flex items-center justify-between">
//           <div className="w-60 max-w-full px-4">
//             <a href="/#" className="block w-full py-5">
//               <img
//                 src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
//                 alt="logo"
//                 className="w-full dark:hidden"
//               />
//               <img
//                 src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
//                 alt="logo"
//                 className="w-full hidden dark:block"
//               />
//             </a>
//           </div>
//           <div className="flex w-full items-center justify-between px-4">
//             <div>
//               <button
//                 onClick={() => setOpen(!open)}
//                 id="navbarToggler"
//                 className={` ${
//                   open && "navbarTogglerActive"
//                 } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
//               >
//                 <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
//                 <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
//                 <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
//               </button>
//               <nav
//                 id="navbarCollapse"
//                 className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${
//                   !open && "hidden"
//                 } `}
//               >
//                 <ul className="block lg:flex">
//                   <ListItem NavLink="/#">Home</ListItem>
//                   <ListItem NavLink="/#">Payment</ListItem>
//                   <ListItem NavLink="/#">About</ListItem>
//                   <ListItem NavLink="/#">Blog</ListItem>
//                 </ul>
//               </nav>
//             </div>
//             <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
//               <a
//                 href="/#"
//                 className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white"
//               >
//                 Sign in
//               </a>

//               <a
//                 href="/#"
//                 className="rounded-lg bg-primary px-7 py-3 text-base font-medium text-white hover:bg-opacity-90"
//               >
//                 Sign Up
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// const ListItem = ({ children, NavLink }) => {
//   return (
//     <>
//       <li>
//         <a
//           href={NavLink}
//           className="flex py-2 text-base font-medium text-dark hover:text-primary dark:text-white lg:ml-10 lg:inline-flex"
//         >
//           {children}
//         </a>
//       </li>
//     </>
//   );
// };

import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Services />
      <Available />
      <GoodLife />
      <Footer />
    </>
  );
};

const Landing = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div id="home" className="flex justify-center items-center">
        <div className="flex-1 basis-1/2 p-16">
          <h1 className="text-xl font-medium mb-4 text-sky-400">
            <i class="fa-regular text-3xl -mr-3 fa-hand-point-right"></i>{" "}
            <span className="border-2 rounded-sm p-2 px-4 border-sky-400">
              Welcome to Nirogya
            </span>
          </h1>
          <h1 className="text-[5.5rem] leading-none font-semibold">
            For private
          </h1>
          <div className="flex items-center gap-x-8">
            <h1 className="text-[5.5rem] font-semibold">clinics and </h1>
            <ImgCont />
          </div>
          <h1 className="text-[5.5rem] leading-none font-semibold">
            medical centers
          </h1>
          <p className="mt-4 text-lg tracking-wider text-slate-700">
            Good health is a state of mental, physical and social well being and
            it does not just mean the absence of disease!
          </p>
          <div className="mt-10 flex items-center gap-x-12">
            <Link
              to="/login"
              className="rounded-full bg-sky-500 py-3 px-6 shadow-2xl text-white font-medium hover:scale-110 transition-all duration-300 shadow-sky-600"
            >
              Get in Touch{" "}
              <i class="p-2 ml-2 h-8 w-8 bg-sky-100 rounded-full text-black fa-solid fa-chevron-right"></i>
            </Link>
            <a href="#about" className="text-slate-800 font-medium">
              See More <i class=" ml-2 fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="flex-1 basis-1/2">
          {/* <div className="absolute top-0 right-0 p-12"> */}
          <Button
            onClick={() => {
              Navigate("/login");
            }}
            className=" px-4 mr-10 py-2 ht-60 bg-blue-300 font-semibold hover:text-slate-900 hover:scale-110 transistion-all duration-300 hidden sm:block"
          >
            Join Us
          </Button>
          {/* </div> */}
          <img src="./images/landing.png" />
        </div>
      </div>
    </>
  );
};

const About = () => {
  return (
    <>
      <div id="about" className="py-16">
        <div className="px-16">
          <h1 className="text-left text-6xl font-bold">About</h1>
          <div className="h-2 mt-2 w-16 bg-sky-400 rounded-full text-center"></div>
        </div>
        <div className="flex w-full gap-x-16 px-16 my-4">
          <div className="basis-1/2 flex-1">
            <h3 className="text-4xl text-sky-400 font-medium">
              What is Nirogya?
            </h3>
            <p className="text-lg tracking-wider mt-2 text-justify">
              Nirogya is a healthcare solutions made for all ages. It aims to
              help them to ease their task of going to hospital and have a
              smooth clinical visit. It is designed for both hospitals as well
              as patients to manage their account with hospital. Nirogya
              provides all kinds of basic functionality that hospital needs from
              creating new patient record to giving them prescription and
              getting daily reminders. It can also be used for an advance
              booking of appointment for a regular clinic visit.
            </p>
          </div>
          <div className="basis-1/2 flex-1">
            <h3 className="text-4xl text-sky-400 font-medium">Why Nirogya?</h3>
            <p className="text-lg tracking-wider mt-2 text-justify">
              The need of Nirogya healthcare solution arises from the growing
              complexity and demands of modern healthcare. As the population
              ages, the demand for healthcare services increases, putting
              pressure on healthcare systems to provide more and better care.
              Advances in technology, such as telemedicine, electronic health
              records, and remote monitoring, are creating new opportunities to
              improve the delivery of healthcare services.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Services = () => {
  return (
    <>
      <div id="service" className="flex justify-center">
        <div className="flex rounded-3xl bg-sky-400 text-white gap-x-12 px-24 h-64 items-center justify-center">
          <div className="flex basis-1/3 flex-1 gap-x-6 items-center">
            <div className="bg-white rounded-xl p-2">
              <img className="w-16 h-16" src="./images/support.png" />
            </div>
            <div className="flex flex-col justify-between gap-y-2 w-48">
              <h1 className="font-bold text-lg">Free Support</h1>
              <h3 className="text-gray-50 font-medium">
                An easy-to-use online directory that lets you
              </h3>
            </div>
          </div>
          <div className="flex basis-1/3 flex-1 gap-x-6 items-center">
            <div className="bg-white rounded-xl p-2">
              <img className="w-16 h-16" src="./images/medicine.png" />
            </div>
            <div className="flex flex-col justify-between gap-y-2 w-48">
              <h1 className="font-bold text-lg">Medicine Prescription</h1>
              <h3 className="text-gray-50 font-medium">
                Clinical excellence must be the priority.
              </h3>
            </div>
          </div>
          <div className="flex basis-1/3 flex-1 gap-x-6 items-center">
            <div className="bg-white rounded-xl p-2">
              <img className="w-16 h-16" src="./images/notification.png" />
            </div>
            <div className="flex flex-col justify-between gap-y-2 w-48">
              <h1 className="font-bold text-lg">Daily Reminders</h1>
              <h3 className="text-gray-50 font-medium">
                no need to remember everyday's intake.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Available = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="flex-1 basis-1/2 p-20 order-2 lg:order-1">
          <h1 className="text-7xl font-bold mb-8">
            Available on <span className="text-sky-400">Android & IOS</span>
          </h1>
          <p className="text-slate-700 leading-6 mb-16 text-sm font-medium">
            We provide a mobile version (Android & IOS) as a complementary
            system. Book Appointment to make it easier for users to use this
            system when outside the hospital or when not bringing a laptop. In
            this mobile version it is exaactly what is on the web system so
            don't worry about using it.
          </p>
          <div className="flex gap-x-12">
            <button className="flex w-52 items-center py-2 px-4 bg-black text-white rounded-xl gap-x-4 hover:scale-110">
              <div>
                <i class="text-5xl fa-brands fa-apple"></i>
              </div>
              <div>
                <h3 className="text-sm text-gray-200 font-medium text-left">
                  Available on
                </h3>
                <h3 className="tracking-wider font-semibold text-xl text-left">
                  App Store
                </h3>
              </div>
            </button>
            <button className="flex w-52 items-center px-4 py-2 bg-black text-white rounded-xl gap-x-4 hover:scale-110">
              <div>
                <i class="text-4xl fa-brands fa-google-play"></i>
              </div>
              <div>
                <h3 className="text-sm text-gray-200 font-medium text-left">
                  Available on
                </h3>
                <h3 className="tracking-wider font-semibold text-xl text-left">
                  Play Store
                </h3>
              </div>
            </button>
          </div>
        </div>
        <div className="basis-1/2 flex-1 order-1 lg:order-2">
          <img className="w-4/5 h-4/5" src="./images/land.png" />
        </div>
      </div>
    </>
  );
};

const ImgCont = () => {
  return (
    <>
      <span className="flex">
        <span className="p-4 text-white rounded-full h-12 flex items-center justify-center w-12 bg-sky-400 text-2xl">
          <i class="fa-solid fa-truck-medical"></i>
        </span>
        <span className="-ml-4 p-4 text-gray-400 rounded-full border-2 border-sky-400 h-12 flex items-center justify-center w-12 bg-white text-2xl">
          <i class="fa-solid fa-hospital"></i>
        </span>
        <span className="-ml-4 p-4 text-white font-medium rounded-full h-12 flex items-center justify-center w-28 bg-black text-base">
          Healthcare
        </span>
      </span>
    </>
  );
};

const GoodLife = () => {
  return (
    <>
      <div className="h-40 flex relative items-center justify-center bg-gray-50">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img className="h-40 w-screen opacity-10" src="./images/waves.png" />
        </div>
        <h1 className="text-6xl font-bold">
          Always check your <span className="text-sky-400">health</span> and
          stay <span className="text-sky-400">healthy</span>.
        </h1>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-y-6 py-6 bg-gray-50">
        <div className="flex gap-x-4 md:gap-x-12 font-medium text-slate-700 justify-center">
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
            href=""
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
          &#169; 2022 Nirogya Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Home;
