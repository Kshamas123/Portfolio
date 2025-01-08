import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Homepage from "./components/homepage";
import About from "./components/about";
import Projects from "./components/projects";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">

      <Router>
  
      <Navbar/>

        <Routes>
        <Route path="/" element={<Homepage/>} /> 
         <Route path="/techstack" element={<About /> }/>
        <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

