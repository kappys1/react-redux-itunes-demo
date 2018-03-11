import { combineReducers } from 'redux';

import { SAVE_PLAYLIST, SET_ACTUAL_PLAY } from './actionsTypes';
export * from './actions'; 

function playlist(state = [] , action){
    switch(action.type){
        case SAVE_PLAYLIST:
            return action.payload;
        default:
            return state;
    }
}

function actualPlay(state = 0, action){
    switch(action.type){
        case SET_ACTUAL_PLAY:
            return action.actual;
        default:
            return state;
    }
}

export default combineReducers({
    playlist,
    actualPlay
})