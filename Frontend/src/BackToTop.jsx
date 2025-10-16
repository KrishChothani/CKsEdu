// src/components/BackToTop.jsx
import React, { useState, useEffect } from "react";
import "./BackToTop.css"; // adjust path if you put css elsewhere

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    console.log("ScrollY:", window.scrollY); // debug
    setShowButton(window.scrollY > 100);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      id="backToTop"
      className={show ? "show" : ""}
      onClick={goTop}
      title="Back to Top"
    >
      ⬆
    </button>
  );
};

export default BackToTop;