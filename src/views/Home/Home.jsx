   import React, { useEffect, useState, useContext } from "react";
// import {  } from "react";
import { useSelector } from "react-redux";
import { mainContext } from "../../App";
import CountryCard from "../../components/CountryCard/CountryCard";
import Header from "../../components/Header/Header";
import TopBar from "../../components/TopBar/TopBar";
import "./Home.css";

const Home = () => {
  const { darkMode } = useContext(mainContext);
  // const [countryData, setCountryData] = useState('')
  const countries = useSelector((state) => state.countryReducer);
  // const oneCountry = useSelector((state)=>state.countryReducer.filter((country)=> country.name === "Afghanistan"))
  // console.log(oneCountry);
  console.log(countries);

  return (
    <div className={`home_container ${darkMode ? "dark" : ""}`}>
      {countries && (
        <div style={{display : 'block', width : '100%'}}>
          <TopBar />
        </div>
      )}
      {countries &&
        countries?.map((country) => (
          <div key={country.name}>
            <CountryCard country={country} />
          </div>
        ))}
    </div>
  );
};
// {darkMode ? : "hsl(207, 26%, 17%)"}

export default Home;
