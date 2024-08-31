import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Sales from "./pages/sales";
import Agents from "./pages/agent";
import ScrollToFooter from "./assets/components/scroll";

export default function App() {
  return (
    <Router>
      <ScrollToFooter/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sales" element={<Sales/>}/>
        <Route path= "/agents" element={<Agents/>}/>
        <Route path="/contact" element={<Home/>}/>
      </Routes>
    </Router>
  );
}
