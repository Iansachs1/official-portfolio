
import React from "react";
import "./index.css";

import Navbar from "./components/navbar";
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";



function App() {

  return (
    <div>
      <Jumbotron 
      title="Hi, I'm Ian"
      description= "A Full-stack web developer from San Diego."
      />
      <Navbar/>
      <About/>
    </div>
  );
}

export default App;

