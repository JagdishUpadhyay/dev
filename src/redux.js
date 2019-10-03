import { combineReducers, createStore } from 'redux';
export const activateGeod = geod => ({
    type: 'ACTIVATE_GEOD',
    geod
});

export const closedGeod = () => ({
    type: 'CLOSED_GEOD'
});

export const geod = (state = {}, action) => {
    switch(action.type) {
        case 'ACTIVATE_GEOD':
            return action.geod;
        case 'CLOSED_GEOD':
            return {};
        default:
            return state;        
    }
}

export const reducers = combineReducers({
    geod
});

export function configureStore(initialState ={}) {
    const store = createStore(reducers, initialState);
    return store;
}

export const store = configureStore();