import { LOAD_CATALOG, SAVE_TERM } from './actionsTypes';
export * from './actions';


export default function searchBar(state = "", action) {

    switch (action.type) {
        case SAVE_TERM:
            return action.term;
        case LOAD_CATALOG:
            return action.payload;
        default:
            return state;
    }

}