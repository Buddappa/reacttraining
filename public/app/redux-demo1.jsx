var redux = require('redux');
console.log('Starting redux example');

var reducer = (state = { name:'Anonymous' }, action) => {
    return state;

};

var store = redux.createStore(reducer);

var curenState = store.getState();
console.log('currentState', curenState);