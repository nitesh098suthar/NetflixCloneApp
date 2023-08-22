import React from "react";
import "./hero.css";
import Header from "./Header.jsx";
import Body from "./Body";

const Hero = () => {
  return (
    <>
      <div
        className="min-h-screen"
        style={{
          background: "url('images/background.jpg')",
          backgroundSize: "cover",
        }}
        id="bg-image"
      >
        <div className="min-h-screen bg-black/50" id="bg-overlay">
          <Header />
          <Body />
        </div>
      </div>
    </>
  );
};

export default Hero;
