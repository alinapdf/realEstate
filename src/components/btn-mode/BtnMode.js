// import { useState } from "react";
import { useEffect } from "react";
// import { useRef } from "react";
import { useLocalStorage } from "../../utils/UseLocalStorage";

import "./BtnMode.scss";
import DetectDarkMode from "../../utils/detectDarkMode";

import sun from "./../../img/mode/Sun.svg";
import moon from "./../../img/mode/Moon.svg";
const BtnDarkMode = () => {
  //   const [darkMode, setDarkMode] = useState("light");

  const [darkMode, setDarkMode] = useLocalStorage("darkMode", DetectDarkMode());

  //   const btnRef = useRef(null);

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
      //   btnRef.current.classList.add("dark-mode-btn-active");
      document.querySelectorAll("a").forEach(function (link) {
        link.classList.add("dark-2");
      });
    } else {
      document.body.classList.remove("dark");
      //   btnRef.current.classList.remove("dark-mode-btn-active");
      document.querySelectorAll("a").forEach(function (link) {
        link.classList.remove("dark-2");
      });
    }
  }, [darkMode]);

  useEffect(() => {
    // проверка темной темы через время суток
    window
      .matchMedia("(prefers-color-scheme:dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.mathces ? "dark" : "light";
        setDarkMode(newColorScheme);
      });
  }, [setDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevState) => {
      return prevState === "light" ? "dark" : "light";
    });
  };

  const btnNormal = "dark-mode-btn";
  const btnActive = "dark-mode-btn dark-mode-btn-active";

  return (
    <button
      //   ref={btnRef}
      className={darkMode === "dark" ? btnActive : btnNormal}
      onClick={toggleDarkMode}
    >
      <img src={moon} alt="dark mode" className="dark-mode-btn-icon" />
      <img src={sun} alt="light mode" className="dark-mode-btn-icon" />
    </button>
  );
};

export default BtnDarkMode;
