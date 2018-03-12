import { combineReducers } from 'redux';
import { SAVE_CATALOG, SET_FILTER_CATALOG, SET_VIEW_CATALOG } from './actionsTypes';
import {millisToMinutesAndSeconds} from '../../helpers';

export * from './actions'; 


function list(state = [] , action){
    switch(action.type){
        case SAVE_CATALOG:
            let payload =  action.payload.map(p => {
                p.artworkUrl200 = p.artworkUrl100.replace("100x100","200x200");
                p.artworkUrl300 = p.artworkUrl100.replace("100x100","300x300");
                p.trackTime = millisToMinutesAndSeconds(p.trackTimeMillis);
                if(p.trackPrice < 0){
                    p.trackPrice = 0;
                }
                return p;
            });
            return payload;
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