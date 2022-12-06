import React, { useContext, useState } from "react";
import { mainContext } from "../../App";
import "./TopBar.css";

const TopBar = () => {
  const {darkMode} = useContext(mainContext)
  const [region, setRegion] = useState('');
  const [country, setCountry] = useState("");

  return (
    <div className={`${darkMode ? 'dark' : ''} topbar_container`}>
      <div className="left">
        <input
          type="text"
          placeholder="Search Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className="right">
        <select
          value={region}
          name="region"
          onChange={(e) => {setRegion(e.target.value); console.log(region);}}
        >
          <option value="">Select Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default TopBar;
