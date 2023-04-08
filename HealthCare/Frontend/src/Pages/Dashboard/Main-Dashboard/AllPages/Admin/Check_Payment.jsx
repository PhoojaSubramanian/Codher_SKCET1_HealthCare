import { Table } from "antd";
import { CalendarTwoTone } from "@ant-design/icons";
import React from "react";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Sidebar from "../../GlobalFiles/Sidebar";
import "./CSS/Payment.css";

const Check_Payment = () => {
  const { data } = useSelector((store) => store.auth);

  const columns = [
    { title: "Id", dataIndex: "Id", key: "Id" },
    { title: "Patient Name", dataIndex: "Patient_Name", key: "Patient Name" },
    { title: "Date", dataIndex: "Date", key: "Date" },
    { title: "Checked By", dataIndex: "Checked_By", key: "Checked By" },
    { title: "Report Ref", dataIndex: "Report_Ref", key: "Report Ref" },
    { title: "Total Cost", dataIndex: "Total_Cost", key: "Total Cost" },
  ];
  var d = Date();
  
// Converting the number value to string
const a = d.toString() 

  const Datas = [
    {
      key: 1,
      Id: "D34",
      Patient_Name: "Ravi",
      Date: "12-09-2022",
      Checked_By: "Dr.Phooja",
      Report_Ref: "ERODEII334l",
      Total_Cost:"₹800"
    },
    {
      key: 2,
      Id: "P34",
      Patient_Name: "Dhanush",
      Date: "12-09-2022",
      Checked_By: "Dr.Nithya",
      Report_Ref: "ERODEII334l",
      Total_Cost:"₹1500"
    },
    {
      key: 3,
      Id: "A35",
      Patient_Name: "Gopi",
      Date: "12-09-2022",
      Checked_By: "Dr.Mega",
      Report_Ref: "ERODEII334l",
      Total_Cost:"₹2000"
    },
   
  ];


  // if (data?.isAuthticated === false) {
  //   return <Navigate to={"/"} />;
  // }

  // if (data?.user.userType !== "admin") {
  //   return <Navigate to={"/dashboard"} />;
  // }
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Payment_Page">
            <div>
            <h1 style={{ marginBottom: "2rem" }}>All Payments</h1>
            <CalendarTwoTone style={{ fontSize: '40px',marginRight:"35px" }}  />
            <h1>Today</h1>
            {a}
              <br />
              <br />  
            </div>
            
            
            <div className="patientBox">
              
              <Table
                columns={columns}
                dataSource={Datas}
                className="PaymentTable"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Check_Payment;
