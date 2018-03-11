import { SAVE_PLAYLIST, SET_PLAY, SET_VIEW_CATALOG } from './actionsTypes';


export function savePlaylist(patch){
    return{
        type: SAVE_PLAYLIST,
        payload: patch
    }
}

export function setActualPLay(num){
    return{
        type: SET_PLAY,
        actual: num
    }
}
