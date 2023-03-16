import React, { useContext, useState } from "react";
import "./Toggle.css";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeContext from "../../Context/ThemeContext" ;
import ToggleButton from "./ToggleButton";

function ToggleMode() {
  // const [mode, setMode] = useState("Light");
  const {theme, changeTheme} = useContext(ThemeContext);
  const [icon, setIcon] = useState(faSun);
  const [toggle, setToggle] = useState(false);

  const handleToggle = (e) => {
    let circle =document.getElementById('toggle-btn')
    // circle.style.transition="all 1s" 
    // console.log(circle)
    if (!toggle) {
      changeTheme("dark");
      circle.style.transform="translateX(-25px)";
      setIcon(faMoon);
    } else {
      changeTheme("light");
      circle.style.transform="translateX(0px)";
      setIcon(faSun);
    }
    setToggle(!toggle);
  };

  return (
      <div className="toggle-container" onClick={handleToggle}>
        <ToggleButton />
        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        <span className="toggle-text">{theme} Mode</span>
      </div>
  );
}

export default ToggleMode;
