import * as actions from './actions';

describe('actions route', () => {

    it('check goToHome', () =>{
        let action = actions.goToHome();
        expect(action.route).toEqual('home');
    })

    it('check goToDetail', () =>{
        let action = actions.goToDetail();
        expect(action.route).toEqual('detail');
    })

    it('check goToCatalog', () =>{
        let action = actions.goToCatalog();
        expect(action.route).toEqual('catalog');
    })

    it('check goToLoading', () =>{
        let action = actions.goToLoading();
        expect(action.route).toEqual('loading');
    })

});