import { FETCH_ALL, FETCH_ONE } from "../actionTypes/actionTypes";
import * as api from "../api";

// Action   creator

// To fetch all the Country
export const getCountries = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCountries();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// To fecth a Single Country
export const getCountry = (countryName) => async (dispatch) => {
  try {
    // console.log('countryName in Action Creator ', countryName )
    const { data } = await api.fetchCountry(countryName);
    // console.log('Api Called')

    dispatch({ type: FETCH_ONE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
