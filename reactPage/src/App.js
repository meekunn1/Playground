import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.js";
import Steel from "./components/pages/Steel.js";
import  Navbar  from "./components/Navbar.js";
import Results from "./components/pages/Results.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/steel' element={<Steel />}></Route>
        <Route path='/results' element={<Results />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
