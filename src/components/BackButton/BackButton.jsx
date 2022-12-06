import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { mainContext } from '../../App';
import './BackButton.css'
import { FaLongArrowAltLeft} from 'react-icons/fa'
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


const BackButton = () => {
    const {darkMode} = useContext(mainContext)
    const navigate = useNavigate();
  return (
   <button onClick={()=> {navigate(-1)}} className={`back_btn ${darkMode ? "dark" : ""}`}>
        <FaLongArrowAltLeft /> <span>Back</span>
   </button>
  )
}

export default BackButton
