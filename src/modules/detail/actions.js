import { SAVE_PLAYLIST, SET_ACTUAL_PLAY } from './actionsTypes';


export function savePlaylist(patch){
    return{
        type: SAVE_PLAYLIST,
        payload: patch
    }
}

export function setActualPLay(num){
    return{
        type: SET_ACTUAL_PLAY,
        actual: num
    }
}
