import { SAVE_CATALOG, SET_FILTER_CATALOG } from './actionsTypes';


export function saveCatalog(patch){
    return{
        type: SAVE_CATALOG,
        payload: patch
    }
}

export function filterCatalog(filter){
    return{
        type: SET_FILTER_CATALOG,
        filter: filter
    }
}
