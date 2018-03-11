import {createStore , combineReducers, applyMiddleware} from 'redux';
import route from './modules/route';
import catalog from './modules/catalog';
import searchBar from './modules/searchBar';
import detail from './modules/detail';
import thunk from 'redux-thunk';

export default function configureStore(){
    const appReducer = combineReducers({
        route,
        catalog,
        detail,
        searchBar
    })

    return createStore(appReducer, applyMiddleware(thunk));
}
