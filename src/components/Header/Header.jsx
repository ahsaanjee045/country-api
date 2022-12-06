import React, {useContext}from 'react'
import { FaMoon, FaRegMoon} from 'react-icons/fa'
import { mainContext } from '../../App'
import './Header.css'

const Header = () => {
    const {darkMode , setDarkMode} = useContext(mainContext);
    // const mode = localStorage.getItem('darkMode');
    // console.log(mode)

  return (
   <header className={`header_container ${darkMode ? 'dark' : ''}`}>
        <div className="logo">
            <h1>Where in the World?</h1>
        </div>
        <div className="theme_btn">
            <button onClick={()=> setDarkMode(!darkMode)}>{darkMode ? <FaMoon/> : <FaRegMoon/>} {darkMode ? 'Light': 'Dark'} Mode</button>
        </div>
   </header>
  )
}

export default Header
