import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext = createContext({
  countries: [],
  country: {},
  getAll: () => {},
  getByRegion: (region) => {},
  getCountry: (name) => {},
});

export function DataProvider(props) {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});

  // useEffect(() => {
  //     axios.get(`https://restcountries.com/v3.1/all`)
  //         .then((response) => {
  //             setcountries(response.data);
  //         })
  // }, [])
  const getAll = () => {
    axios.get(`https://restcountries.com/v3.1/all`).then((response) => {
      setCountries(response.data);
    });
  };
  const getByRegion = (region) => {
    axios
      .get(`https://restcountries.com/v3.1/region/` + region)
      .then((response) => {
        setCountries(response.data);
      });
  };
  const getCountry = (name) => {
    axios(`https://restcountries.com/v3.1/name/` + name, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        withCredentials: false,
        credentials: 'same-origin',
      })
      .then((response) => {
        setCountry(response.data);
      });
  };
  return (
    <DataContext.Provider
      value={{ country, countries, getAll, getByRegion, getCountry }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContext;
