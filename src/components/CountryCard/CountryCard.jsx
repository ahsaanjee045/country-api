import React, {useContext}from 'react'
import {NavLink} from 'react-router-dom';
import './CountryCard.css'
import {mainContext} from '../../App'


const CountryCard = ({country}) => {
    const { darkMode, setCurrentCountry, currentCountry} = useContext(mainContext)

  return (
    <div className={`card_container ${darkMode ? 'dark' : ''}`}>
        <div className="top">
            <img src={country?.flags?.png} alt={country?.name} />
        </div>
        <NavLink to={`/${country?.name}`} onClick={()=> setCurrentCountry(country?.name)}>
            <div className="bottom">
                <div className="country_name">
                    <p>{country?.name}</p>
                </div>
                <div className="country_details">
                    <p> <span className='country_label'>Population</span> : {country?.population}</p>
                    <p> <span className='country_label'>Capital</span> : {country?.capital}</p>
                    <p> <span className='country_label'>Region</span> : {country?.region}</p>
                </div>
            </div>
        </NavLink>
      
    </div>
  )
}

export default CountryCard
