import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Home/Header.jsx";
// import axios from "axios";
import "./app.css";

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route />
        </Routes>
      </Router>
    </>
  );
};

export default App;
