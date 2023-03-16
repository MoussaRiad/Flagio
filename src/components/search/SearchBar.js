import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ThemeContext from "../../Context/ThemeContext" ;

function SearchBar() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={'searchbar '+theme+'-mode'}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />      
      <input type={"text"} placeholder={"Search for a country..."}></input>
    </div>
  )
}

export default SearchBar