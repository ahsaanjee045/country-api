import {FETCH_ALL , FETCH_ONE} from '../actionTypes/actionTypes'


const countries = (countryState = [], action) => {
    switch(action.type){
        case FETCH_ALL :
            return action.payload;
        case FETCH_ONE :
            return countryState.map((country) => country.name === action.payload.name ? action.payload : country) ;
        default : 
            return countryState;
    }
}
export default countries;