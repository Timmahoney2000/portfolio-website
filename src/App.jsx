/* eslint-disable no-unused-vars */

import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="text-red-300">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default App;
