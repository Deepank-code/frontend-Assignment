import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/Main";

import SideBar from "./components/SideBar";
const patientUrl = "https://619f39821ac52a0017ba467e.mockapi.io/patientDetails";
const appoimentUrl =
  "https://619f39821ac52a0017ba467e.mockapi.io/appointment_details";
function App() {
  const [patientdata, setpatientdata] = useState([]);
  const [appoimentdata, setappoimentdata] = useState([]);

  useEffect(() => {
    patientData();
    appoimentsData();
  }, []);

  const patientData = async function () {
    const data = await fetch(patientUrl);
    const parseData = await data.json();
    console.log(parseData);
    setpatientdata(parseData);
  };

  const appoimentsData = async () => {
    const data = await fetch(appoimentUrl);
    const parseData = await data.json();
    console.log(parseData);
    setappoimentdata(parseData);
  };

  const [sidebar, setsidebar] = useState(true);
  const handleSidebar = () => {
    setsidebar(!sidebar);
  };

  return (
    <div className="App d-flex">
      <i
        className="hamburger fa-solid fa-bars "
        style={{ cursor: "pointer" }}
        onClick={handleSidebar}
      ></i>

      {sidebar ? <SideBar /> : null}

      <Main data={patientdata} appoimentdata={appoimentdata} />
    </div>
  );
}

export default App;
