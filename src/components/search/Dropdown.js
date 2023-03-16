import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../../Context/ThemeContext" ;

function Dropdown() {

  const {theme} = useContext(ThemeContext);
  const [menu,setMenu]=useState(false)
  const [value,setValue]=useState("Filter by Region")
  const items = [
    { region: "Africa" },
    { region: "Asia" },
    { region: "Europe" },
    { region: "Australia" },
    { region: "America" },
  ];
  // useEffect(() => {
  // }, [menu])
  const toggleMenu =(e)=>{
    e.preventDefault();
    setMenu(!menu)
  }
  const changeValue =(e) =>{
    e.preventDefault();
    setValue(e.target.getAttribute('data-value'))
    toggleMenu(e)
    // setValue(e.target.value)
  }
  let style={
    display:menu===true? 'block':'none'
  }
  return (
    <div className={"dropdown "+theme+"-mode"}>
      <div className={"dropdown-input "} onClick={toggleMenu}>
        <div className={"dropdown-input-text "}>{value}</div>
        <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
      </div>
      <div className="dropdown-menu" style={style}>
        {items.map((option) => (
          <div key={option.region} data-value={option.region} className="dropdown-item" onClick={changeValue}>
            {option.region}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
