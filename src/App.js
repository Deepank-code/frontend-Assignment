import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/Main";

import SideBar from "./components/SideBar";
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

      <Main data={patientdata} appoimentdata={appoimentdata} />
    </div>
  );
}

export default App;
