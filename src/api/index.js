import axios from 'axios'

const url = 'https://restcountries.com/v2/'

export const fetchCountries = () => axios.get(`${url}/all`);
export const fetchCountry = (countryName) => axios.get(`${url}/name/${countryName}`)
