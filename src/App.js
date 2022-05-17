import React from "react";
import "./App.scss";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatIsGPT3,
  Header,
} from "./containers";
import { Brand, CTA, Navbar } from "./components";

const App = () => {
  return (
    <div className="pp">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
        <Brand />
        <WhatIsGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
      <Footer />
    </div>
  );
};

export default App;
