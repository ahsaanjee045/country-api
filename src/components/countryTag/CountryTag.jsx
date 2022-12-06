import React,{useState, useEffect, useContext} from "react";
import { mainContext } from "../../App";
import "./CountryTag.css"


const CountryTag =({brd})=> {
    const {darkMode} = useContext(mainContext)
    return(
        <span className={`tag_container ${darkMode ? "dark" : ""}`}>{brd}</span>
    );
};

export default CountryTag;