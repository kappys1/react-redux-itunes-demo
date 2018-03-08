import { SAVE_CATALOG } from './actionsTypes';


export function saveCatalog(patch){
    return{
        type: SAVE_CATALOG,
        payload: patch
    }
}
