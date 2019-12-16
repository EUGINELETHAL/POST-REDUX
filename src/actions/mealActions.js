 import {FETCH_MEALS,NEW_MEAL} from './types'

export const fetchMeals =()=>dispatch =>{
    fetch('https://my-json-server.typicode.com/EUGINELETHAL/POST-REDUX/meals')
    .then (res=>res.json())
    .then(meals=>
        dispatch({
            type:FETCH_MEALS,
            payload:meals
        }));
};













