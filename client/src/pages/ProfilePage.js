// ProfilePage.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "../styles/ProfileStyles.css";

const ProfilePage = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/v1/user/getUsersData", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        if (response.data.success) {
          setUser(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <Layout>
      {/* <div className=" "> */}
      {/* <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={8} xl={6}> */}
      {/* <Card
        // title={<span className="text-center">{user.isAdmin
        //   ? "Admin Detail"
        //   : user.isDoctor
        //   ? "Doctor Detail"
        //   : "Patient Detail"}</span>}

        className="w-64 items-center justify-center text-center "
      >
        <p className="mt-1/2">
          <b className="">Name: </b> {user.name}
        </p>
        <p className="mt-1/2">
          <b>Email: </b> {user.email}
        </p>
        <p className="mt-1/2">
          <b>Status: </b> {user.status}
        </p>
        <p className="mt-1/2">
          <b>User Type: </b>{" "}
          {user.isAdmin ? "Admin" : user.isDoctor ? "Doctor" : "Patient"}
        </p>
        <p className="mt-1/2">
          <b>Gender: </b>
          {user.gender}
        </p>
        <p className="mt-1/2">
          <b>Gender: </b>
          {user.bloodgroup}
        </p>
        <p className="mt-1/2">
          <b>Phone: </b> {user.phone}
        </p>
        <p className="mt-1/2">
          <b>Address: </b> {user.address}
        </p>
      </Card> */}
      {/* </Col>
        </Row> */}
      {/* </div> */}
      <ul role="list" className="divide-y divide-gray-100  px-5">
        <li key={user.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img
              className="h-12 w-12 flex-none  rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 md:text-gray-900 dark:text-white">
                {user.salutation}
                {user.fname} {user.lname}
              </p>
              <p className="mt-1 truncate text-xs leading-5 md:text-gray-500 dark:text-white">
                {user.email}
              </p>
              {user.isDoctor ? (
                <></>
              ) : (
                <p className="mt-1 truncate text-xs leading-5 md:text-gray-500 dark:text-white">
                  Blood Group: {user.bloodgroup}
                </p>
              )}
              <p className="mt-1 truncate text-xs leading-5 md:text-gray-500 dark:text-white">
                Gender: {user.gender}
              </p>
              <p className="mt-1 truncate text-xs leading-5 md:text-gray-500 dark:text-white">
                Address: {user.address}
              </p>
              <p className="mt-1 truncate text-xs leading-5 md:text-gray-500 dark:text-white">
                Phone: {user.phone}
              </p>
              {user.isDoctor ? (
                <></>
              ) : (
                <p className="mt-1 truncate text-xs leading-5 md:text-gray-500 dark:text-white">
                  problem: {user.problem}
                </p>
              )}
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 md:text-gray-900 dark:text-white">
              {user.isAdmin ? "Admin" : user.isDoctor ? "Doctor" : "Patient"}
            </p>
            <div className="mt-1 flex items-center gap-x-1.5">
              <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </div>
              <p className="text-xs leading-5 text-gray-500">Online</p>
            </div>
          </div>
        </li>
      </ul>
    </Layout>
  );
};

export default ProfilePage;
