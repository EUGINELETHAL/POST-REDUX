import {FETCH_MEALS,NEW_MEALS} from '../actions/types'

const initialState = {
items:[],
item:{}


};

export default function (state=initialState,action){
    switch(action.type){
    case FETCH_MEALS:
    return {
    ...state,
    items:action.payload
    };
default:
    return state;
    }
}
