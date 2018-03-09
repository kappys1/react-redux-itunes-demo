import { combineReducers } from 'redux';

import { SAVE_CATALOG, SET_FILTER_CATALOG } from './actionsTypes';
export * from './actions'; 

function list(state = [] , action){
    switch(action.type){
        case SAVE_CATALOG:
            return action.payload;
        default:
            return state;
    }
}
function filter(state = "", action){
    switch(action.type){
        case SET_FILTER_CATALOG:
            return action.filter;
        default:
            return state;
    }
}

export default combineReducers({
    list,
    filter
})