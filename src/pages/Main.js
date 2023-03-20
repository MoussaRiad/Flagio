import React, { useContext, useEffect, useMemo } from "react";
import Container from "../components/container/Container";
import Content from "../components/content/Content";
import Dropdown from "../components/search/Dropdown";
import SearchBar from "../components/search/SearchBar";
import DataContext from "../Context/DataContext";

export default function Main() {
  const { countries, getAll } = useContext(DataContext);
  useEffect(() => {
    getAll();
    console.log(countries.length);
  }, []);
  // useMemo(() => getAll(), [])
  return (
    <>
      <div className={"search-zone "}>
        <SearchBar />
        <Dropdown />
      </div>
      <Content />
    </>
  );
}
