/* eslint-disable no-unused-vars */

import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="text-red-300">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default App;
