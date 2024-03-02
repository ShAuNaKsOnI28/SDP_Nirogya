import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Button } from "antd";
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

  const pageSize = 1;
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
      <div>
        <table border="1">
          <thead>
            <tr>
              {columns.map((column) => (
                <th className=" px-5 py-3 w-screen" key={column.title}>
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentAppointments.map((record, index) => (
              <tr key={index}>
                {columns.map((column, columnIndex) => (
                  <td key={columnIndex}>
                    {column.render
                      ? column.render(record)
                      : record[column.dataIndex]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-10 pt-10 ">
          <Button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous Page
          </Button>
          <span> Page {currentPage} </span>
          <Button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={endIndex >= appointments.length}
          >
            Next Page
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Appointments;
