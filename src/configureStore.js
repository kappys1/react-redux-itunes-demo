import {createStore , combineReducers} from 'redux';
import route from './modules/route';


export default function configureStore(){
    const appReducer = combineReducers({
        route,
    })

    return createStore(appReducer);
}
