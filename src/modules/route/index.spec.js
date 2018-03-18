import reducers from './index';
import * as actions from './actions';

describe('reducers route', () => {

    it('should return the initial state', () => {
        expect(reducers(undefined,{})).toEqual('home');
    });

    it('should return good route', () => {
        expect(reducers('home',{route:'catalog',type:actions.SET_ROUTE})).toEqual('catalog');
    });

    it('should return state route for bad type', () => {
        expect(reducers('home',{route:'catalog',type: '' })).toEqual('home'); 
    });

});