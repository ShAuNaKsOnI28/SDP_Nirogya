import { Table } from "antd";
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
      // dataIndex: "fname",
      render: (record) => (
        <span>
          {record.fname} {record.lname}
        </span>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Medicine Name",
      dataIndex: "Mname",
    },
    {
      title: "Morning Doseage",
      // dataIndex: "morning",
      render: (record, text) => <span>{record.morning ? "yes" : "no"}</span>,
    },
    {
      title: "Afternoon Doseage",
      // dataIndex: "afternoon",
      render: (record, text) => <span>{record.afternoon ? "yes" : "no"}</span>,
    },
    {
      title: "Evening Doseage",
      // dataIndex: "evening",
      render: (record, text) => <span>{record.evening ? "yes" : "no"}</span>,
    },
    {
      title: "Night Doseage",
      // dataIndex: "night",
      render: (record, text) => <span>{record.night ? "yes" : "no"}</span>,
    },
    {
      title: "Date of appointment",
      dataIndex: "date",
    },
    {
      title: "Doseage",
      dataIndex: "quantity",
    },
    {
      title: "Number of days",
      dataIndex: "noofdays",
    },
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
      {/* <div className=" rounded-md overflow-x-auto ml-8 max-w-screen-md dark:bg-white md:bg-white dark:text-black md:text-black">
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
      <div className=" space-x-56 px-10 pt-10 mx-2 ">
        <Button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-white"
        >
          Previous Page
        </Button>
        <span className="dark:bg-white md:bg-white dark:text-black md:text-black rounded-md p-1">
          {" "}
          Page {currentPage}{" "}
        </span>
        <Button
          className="bg-white"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={endIndex >= prescription.length}
        >
          Next Page
        </Button>
      </div> */}
      <Table
        columns={columns}
        dataSource={prescription}
        bordered
        size="middle"
        className="mx-5 mt-10"
      />
    </Layout>
  );
};

export default Prescription;
