import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import { Message } from "./components/Message";
import Payment from "./components/Payment";
import SideBar from "./components/SideBar";
import Overview from "./components/Overview";
import Calender from "./components/Calender";
const patientUrl = "https://619f39821ac52a0017ba467e.mockapi.io/patientDetails";
const appoimentUrl =
  "https://619f39821ac52a0017ba467e.mockapi.io/appointment_details";
const doctorurl = "https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails";
function App() {
  const [sidebar, setsidebar] = useState(true);
  const [patientdata, setpatientdata] = useState([]);
  const [appoimentdata, setappoimentdata] = useState([]);
  const [doctordata, setdoctordata] = useState([]);

  const handleSidebar = () => {
    setsidebar(!sidebar);
  };
  useEffect(() => {
    patientData();
    appoimentsData();
    doctorData();
  }, []);

  const patientData = async function () {
    try {
      const data = await fetch(patientUrl);
      const parseData = await data.json();
      console.log(parseData);
      setpatientdata(parseData);
    } catch (error) {
      console.log(error);
    }
  };

  const appoimentsData = async () => {
    try {
      const data = await fetch(appoimentUrl);
      const parseData = await data.json();
      console.log(parseData);
      setappoimentdata(parseData);
    } catch (error) {
      console.log(error);
    }
  };
  const doctorData = async () => {
    try {
      const data = await fetch(doctorurl);
      const parseData = await data.json();
      console.log(parseData);
      setdoctordata(parseData);
      console.log("here is the ", parseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App d-flex">
      <i
        className="hamburger fa-solid fa-bars "
        style={{ cursor: "pointer" }}
        onClick={handleSidebar}
      ></i>

      {sidebar ? <SideBar doctorData={doctordata} /> : null}
      <Routes>
        <Route
          path="/"
          element={<Main data={patientdata} appoimentdata={appoimentdata} />}
        />
        <Route path="/overview" element={<Overview />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/message" element={<Message />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
