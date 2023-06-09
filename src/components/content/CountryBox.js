import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../../Context/ThemeContext";

export default function CountryBox(props) {
    const navigate = useNavigate()
  const {theme} = useContext(ThemeContext);  
  const [data, setData] = useState({});
  useEffect(() => {
    setData(props.data)
    console.log(data)
  },[]);
  return (<div className={"country-box "+theme+"-mode"} onClick={()=>navigate('/coutry/'+data.cca2)}>
    <div className={"country-flag "+theme+"-mode"}>
        <img src={(data && data.flags)? data.flags.png:""} alt={(data & data.flags)?data.flags.alt:""}/></div>
    <div className="country-info">
        <h5>{(data && data.name)? data.name.common:""}</h5>
        <p><b>Population:</b>{(data && data.population)? data.population:""}</p>
        <p><b>Region:</b>{(data && data.region)? data.region:""}</p>
        <p><b>Capital</b>{(data && data.capital)? data.capital:""}</p>
    </div>
  </div>);
}
