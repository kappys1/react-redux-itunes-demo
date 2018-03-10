import { combineReducers } from 'redux';

import { SAVE_CATALOG, SET_FILTER_CATALOG, SET_VIEW_CATALOG } from './actionsTypes';
export * from './actions'; 

function list(state = [] , action){
    switch(action.type){
        case SAVE_CATALOG:
            return action.payload;
        default:
            return state;
    }
}

function filter(state = "NONE", action){
    switch(action.type){
        case SET_FILTER_CATALOG:
            return action.filter;
        default:
            return state;
    }
}

function view(state = "LIST", action){
    switch(action.type){
        case SET_VIEW_CATALOG:
            return action.view;
        default:
            return state;
    }
}

export default combineReducers({
    list,
    filter,
    view
})