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
    const options = {
      method: "GET",
    //   mode: 'no-cors',
    //   url: "https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all",
      url: "https://restcountries.com/v3.1/all",
      headers: {
        // "X-RapidAPI-Key": "dc6a936644mshfa37e6ecf200efdp1a96b6jsn793ede38e17d",
        // "X-RapidAPI-Host": "ajayakv-rest-countries-v1.p.rapidapi.com",
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    //   withCredentials: true,
    //   credentials: 'same-origin',
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setCountries(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    // axios.get(`https://restcountries.com/v3.1/all`).then((response) => {
    // });
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
      method: "GET",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: false,
      credentials: "same-origin",
    }).then((response) => {
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
