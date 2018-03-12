export const SET_ROUTE = 'SET_ROUTE';

function setRoute(newRoute){
    return {
        type: SET_ROUTE,
        route: newRoute
    }
}

export function goToHome(){
    return setRoute('home');
}

export function goToDetail(){
    return setRoute('detail');
}

export function goToCatalog(){
    return setRoute('catalog');
}

export function goToLoading(){
    return setRoute('loading');
}
