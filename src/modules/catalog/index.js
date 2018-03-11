import { combineReducers } from 'redux';

import { SAVE_CATALOG, SET_FILTER_CATALOG, SET_VIEW_CATALOG } from './actionsTypes';
export * from './actions'; 

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function list(state = [] , action){
    switch(action.type){
        case SAVE_CATALOG:
            action.payload.map( (p,i) => {
                p.artworkUrl100 = p.artworkUrl100.replace("100x100","200x200");
                p.trackTime = millisToMinutesAndSeconds(p.trackTimeMillis);
                if(p.trackPrice < 0){
                    p.trackPrice = 0;
                }
            });
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