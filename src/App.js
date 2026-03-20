import React from "react";
import "@fontsource/poppins"; 
import "@fontsource/poppins/600.css"; 
import Navbar from "./components/Navbar";
import './App.css'
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <h1 style={{color:"red"}}>hello</h1>
      <Navbar />
      <Home /> 
      <About />
      <Project />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
