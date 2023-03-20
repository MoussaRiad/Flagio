import React, { useContext, useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import Dropdown from '../search/Dropdown'
import SearchBar from '../search/SearchBar'
import ThemeContext from '../../Context/ThemeContext'
export default function Container(props) {
  const {theme} = useContext(ThemeContext);
    
    
  return (
    <div className={'App'}>
        <Navbar />
        <div className={"App-container "+theme+"-mode"}>
          {props.children}
        </div>
      </div>
  )
}
