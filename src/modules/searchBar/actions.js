import { LOAD_CATALOG, SAVE_TERM } from './actionsTypes';
import { goToCatalog } from '../route'
import { saveCatalog } from '../catalog'

export function saveTerm(term) {
    return {
        type: SAVE_TERM,
        term: term
    }
}

export function loadCatalog(term) {
    return (dispatch, getState) => {
        console.log(term);
        fetch('https://itunes.apple.com/search?term=' + term)
            .then((result) => {
                return result.json();
            }).then((jsonResult) => {
                let result = jsonResult.results.filter(r => r.kind === 'song');
                dispatch(saveCatalog(result));
                dispatch(goToCatalog());
                console.log(result);
            }).catch(function () {
                console.log("error");
                dispatch(goToCatalog());
            });
    };
}




