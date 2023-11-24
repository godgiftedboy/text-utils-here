// import logo from './logo.svg';
import "./App.css";
// let name="<b>RAm<b>";  //to avoid dangerous HTML and JS, it renders the raw text for <b> tag.
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import About from "./components/About";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(()=>{
      //   document.title="TextUtils is Amazing";
      // },2000)
      // setInterval(()=>{
      //   document.title="Install TextUtils now";
      // },1500)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/* <Router> */}
      {/* <Navbar title="Text Utils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      {/* to check default props */}
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route exact path='/' element={ */}
        <TextForm heading="My text area" mode={mode} showAlert={showAlert} />
        {/* } /> */}
        {/* <Route exact path='/about' element={<About/>} /> */}
        {/* <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm
                heading="My text area"
                mode={mode}
                showAlert={showAlert}
              />
            </Route> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
