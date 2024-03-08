import { Button } from "antd";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
// import "../styles/Navbar.css";
const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const getAppointments = async () => {
    try {
      const res = await axios.get("/api/v1/user/user-appointments", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setAppointments(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // const columns = [
  //   {
  //     title: "Name",
  //     render: (text, record) => (
  //       <span className="">
  //         {record.FirstName} {record.LastName}
  //       </span>
  //     ),
  //   },
  //   {
  //     title: "Phone",
  //     render: (text, record) => <span>{record.Phone}</span>,
  //   },
  //   {
  //     title: "Date & Time",
  //     render: (text, record) => (
  //       <span>
  //         {moment(record.date).format("DD-MM-YYYY")} &nbsp;
  //         {moment(record.time).format("HH:mm")}
  //       </span>
  //     ),
  //   },
  //   {
  //     title: "Status",
  //     dataIndex: "status",
  //   },
  // ];

  const columns = [
    {
      title: "Name",
      render: (record) => (
        <span className="">
          {record.FirstName} {record.LastName}
        </span>
      ),
    },
    {
      title: "Phone",
      render: (record) => <span>{record.Phone}</span>,
    },
    {
      title: "Date & Time",
      render: (record) => (
        <span>
          {moment(record.date).format("DD-MM-YYYY")} &nbsp;
          {moment(record.time).format("HH:mm")}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentAppointments = appointments.slice(startIndex, endIndex);

  return (
    <Layout>
      {/* <Table
        columns={columns}
        dataSource={appointments}
        bordered={true}
        size="middle"
        className="md:bg-red-800 dark:bg-black p-2"
        pagination={{ pageSize: 5 }}
      /> */}
      <div className=" rounded-md overflow-x-auto ml-8 max-w-screen-md dark:bg-white md:bg-black dark:text-black md:text-white">
        <table className=" min-w-full border border-gray-300">
          <thead>
            <tr>
              {columns.map((column, columnIndex) => (
                <th
                  key={columnIndex}
                  className="px-6 py-3 text-left text-sm font-semibold md:text-black dark:text-black uppercase tracking-wider"
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentAppointments.map((record, index) => (
              <tr key={index}>
                {columns.map((column, columnIndex) => (
                  <td key={columnIndex} className="px-6 py-4 whitespace-nowrap">
                    {column.render
                      ? column.render(record)
                      : record[column.dataIndex]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=" space-x-56 px-10 pt-10 mx-2 ">
        <Button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-white"
        >
          Previous Page
        </Button>
        <span className="dark:bg-white md:bg-black dark:text-black md:text-white rounded-md p-1">
          {" "}
          Page {currentPage}{" "}
        </span>
        <Button
          className="bg-white"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={endIndex >= appointments.length}
        >
          Next Page
        </Button>
      </div>
    </Layout>
  );
};

export default Appointments;
