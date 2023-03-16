import React, { useContext } from 'react'
import ToggleMode from '../toggle/ToggleMode'
import ThemeContext from "../../Context/ThemeContext" ;


// create a tag for the title and a div for the toggle mode
// the toggle mode will be a button that will change the theme of the app
// the title will be a link that will redirect to the home page

function Navbar() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={'navbar '+theme+'-mode'}>
      <div className='title'>
        <a href='#'>
          Where in the world ?  
        </a> 
      </div>
      <div className='toggle-mode'>
        <ToggleMode />
      </div>
    </div>
  )
}

export default Navbar

