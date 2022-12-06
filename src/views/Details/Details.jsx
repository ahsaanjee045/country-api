import React, { useContext, useEffect } from "react";
import "./Details.css";
import { mainContext } from "../../App";

import BackButton from "../../components/BackButton/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../../actions/countryActions";
import { useParams } from "react-router-dom";
import CountryTag from "../../components/countryTag/CountryTag";

const Details = () => {
  const dispatch = useDispatch();
  const countryName = useParams();
  console.log("countryName : ", countryName.name);
  const { darkMode, currentCountry } = useContext(mainContext);
  const country = useSelector((state) =>
    countryName
      ? state.countryReducer.find((c) => c.name == countryName.name)
      : null
  );
  {
    country && console.log("country : ", country);
  }
  // const countryData = useSelector((state) => state.countryReducer);
  // const oneCountry = useSelector((state) =>
  //   state.countryReducer.filter((country) => country.name === currentCountry)
  // ); ;
  // console.log("countryData : ", oneCountry);
  // useEffect(()=> {
  //   if(countryName){
  //     dispatch(getCountry(countryName.name))
  //   }
  // }, [countryName, dispatch])

  return (
    <div className={`details_container ${darkMode ? "dark" : ""}`}>
      <div className="top_container">
        <BackButton />
      </div>
      <div className="bottom_container">
        <div className="left">
          <img src={country?.flag} alt={country?.name} />
        </div>
        <div className="right">
          <div className="top_details">
            <h1>{country?.name}</h1>
          </div>
          <div className="middle_details">
            <div className="left_details">
              <p>
                Native Name:{" "}
                <span className="details_items">{country?.nativeName}</span>{" "}
              </p>
              <p>
                Population:{" "}
                <span className="details_items">{country?.population}</span>
              </p>
              <p>
                Region: <span className="details_items">{country?.region}</span>
              </p>
              <p>
                Sub Region:
                <span className="details_items">{country?.subregion}</span>{" "}
              </p>
              <p>
                Capital:{" "}
                <span className="details_items">{country?.capital}</span>
              </p>
            </div>
            <div className="right_details">
              <p>
                Top Level Domain:{" "}
                {country?.topLevelDomain.map((tlp, index) => (
                  <span key={index} className="details_items">{tlp} </span>
                ))}
              </p>
              <p>
                Currencies:
                {country?.currencies?.map((currency) => (
                  <span key={currency.code} className="details_items">{currency.name} </span>
                )) }
                {/* <span className="details_items">{country?.currencies[0]?.name}</span> */}
              </p>
              <p>
                Languages:{" "}
                {country?.languages.map((language) => (
                  <span key={language.name} className="details_items">{language.name} </span>
                ))}
              </p>
            </div>
          </div>
          <div className="bottom_details">
            <p>
              Border Countries:
              {country?.borders?.map((brd, index) => (
                <CountryTag key={index} brd={brd} />
              ))}
              {/* <CountryTag brd={brd}/> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
