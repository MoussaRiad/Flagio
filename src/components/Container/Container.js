import React, { useContext, useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import Dropdown from '../search/Dropdown'
import SearchBar from '../search/SearchBar'
import ThemeContext from '../../Context/ThemeContext'
import DataContext from '../../Context/DataContext'
export default function Container() {
  const {theme} = useContext(ThemeContext);
    const {countries,getAll} = useContext(DataContext)
    useEffect(() => {
      getAll()
      console.log(countries)
    }, [countries])
    
  return (
    <div className={'App'}>
        <Navbar />
        <div className={"App-container "+theme+"-mode"}>
          <div className={"search-zone "}>
            <SearchBar />
            <Dropdown />
          </div>
          <div>
            {countries}
          </div>
        </div>
      </div>
  )
}
