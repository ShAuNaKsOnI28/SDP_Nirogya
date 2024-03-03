import { Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

const Prescription = () => {
  const [prescription, setPrescription] = useState([]);
  const getPrescription = async () => {
    try {
      const res = await axios.get("/api/v1/user/user-prescription", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("res", res.data.data);
      if (res.data.success) {
        setPrescription(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPrescription();
  }, []);

  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const columns = [
    {
      title: "Doctor Name",
      dataIndex: "fname",
      // render: (record) => (
      //   <span>
      //     {record.FirstName} {record.LastName}
      //   </span>
      // ),
    },
    // {
    //   title: "Date",
    //   dataIndex: "date",
    // },
    {
      title: "Medicine Name",
      dataIndex: "Mname",
    },
    // {
    //   title: "Morning Doseage",
    //   dataIndex: "morning",
    // },
    // {
    //   title: "Afternoon Doseage",
    //   dataIndex: "afternoon",
    // },
    // {
    //   title: "Evening Doseage",
    //   dataIndex: "evening",
    // },
    // {
    //   title: "Night Doseage",
    //   dataIndex: "night",
    // },
    // {
    //   title: "Date of appointment",
    //   dataIndex: "date",
    // },
    // {
    //   title: "Doseage",
    //   dataIndex: "quantity",
    // },
    // {
    //   title: "Number of days",
    //   dataIndex: "noofdays",
    // },
    {
      title: "Problem diagnosed",
      dataIndex: "problem",
    },
    {
      title: "treatment",
      dataIndex: "diagnosis",
    },
    {
      title: "status",
      dataIndex: "status",
    },
  ];

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPrescription = prescription.slice(startIndex, endIndex);

  return (
    <Layout>
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
            {currentPrescription.map((record, index) => (
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
            disabled={endIndex >= prescription.length}
          >
            Next Page
          </Button>
        </div>
      </div>
      {/* <div className=" overflow-x-auto">
        <table className=" min-w-full border border-gray-300">
          <thead>
            <tr>
              {columns.map((column, columnIndex) => (
                <th
                  key={columnIndex}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentPrescription.map((record, index) => (
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
      <div className="px-10 pt-10 space-x-2">
        <Button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </Button>
        <span> Page {currentPage} </span>
        <Button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={endIndex >= prescription.length}
        >
          Next Page
        </Button>
      </div>
      {/* <Table
        columns={columns}
        dataSource={prescription}
        pagination={{ pageSize: 5 }}
      /> */}
    </Layout>
  );
};

export default Prescription;
