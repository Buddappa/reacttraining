var redux = require('redux');
var axios=require('axios');

console.log('Starting redux example');

// var isFetching=false;

var nameReducer = (state = 'Anonymous', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    };
};

var changeName=(name)=>
{
return{
  type:'CHANGE_NAME',
  name
}
};

var addhobby=(hobby)=>
{
return{
  type: 'ADD_HOBBY',
  hobby
}
};

var adddept=(dept)=>
{
return{
  type: 'ADD_DEPT',
  dept
}
};

var startLocaionFetch=()=>
{
return{
  type: 'START_LOCATION_FETCH',
}
};

var complateLocaionFetch=(url)=>
{
return{
  type: 'COMPLETE_LOCATION_FETCH',
  url
}
};

var fetchLocation=()=>{
store.dispatch(startLocaionFetch());
axios.get('http://ipinfo.io').then(function(res)
{
var loc=res.data.loc;
var baseurl='http://maps.google.com?q=';
store.dispatch(complateLocaionFetch(baseurl+loc));
})

}
var defaultState = {
    name: 'Anonymous',
    hobbies: [],
    dept: []

};

var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            return [
                ...state,
                {
                    id: nextHobbyId++,
                    hobby: action.hobby
                }
            ];
        case 'REMOVE_HOBBY':
            return state.filter((hobby) => hobby.id !== action.id);
        default:
            return state;
    }
};


var nextDeptId = 1;

var deptsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DEPT':
            return [
                ...state,
                {
                    id: nextDeptId++,
                    dept: action.dept
                }
            ];
        case 'REMOVE_DEPT':
            return state.filter((dept) => dept.id !== action.id);
        default:
            return state;
    }
};


var mapReducer = (state ={isFetching:false,url:undefined}, action) => {
    switch (action.type) {
        case 'START_LOCATION_FETCH':
            return{
                isFetching: true,
                url:undefined
                };
        case 'COMPLETE_LOCATION_FETCH':
            return{
                isFetching: false,
                url:action.url
                };
        default:
            return state;
    }
};
// var reducer = (state = defaultState, action) => {

//  switch(action.type)
//  {
// case 'CHANGE-NAME':

// return{
// ...state,
// name: action.name

// };
// case 'ADD_HOBBY':

// return{
// ...state.hobbies,
// hobbies:{
// id: nextHobbyId++,
// hobby:action.hobby
// }

// };
// case 'ADD_DEPT':

// return{
// ...state.depts,
// depts:{
// id: nextDEPTId++,
// dept:action.dept
// }

// };
// default:
// return state;

//  }
// };

var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    depts: deptsReducer,
    map:mapReducer

});

var store = redux.createStore(reducer, redux.compose(

    window.devToolsExtension ? window.devToolsExtension() : f => f
));

var us = store.subscribe(() => {
    var state = store.getState();
    console.log('Name is ', [state.name,state.hobbies,state.depts]);
    if(state.map.isFetching)
    {
document.getElementById('app').innerHTML='Loading';
    }
    else if(state.map.url)
    {
document.getElementById('app').innerHTML= '<a href="'+ state.map.url+ '" target="+blank">View Your Location</a>';

    }
    // console.log('Name is ', state.hobbies.hobby);
});

var curenState = store.getState();
console.log('currentState', curenState);

fetchLocation();

store.dispatch(
   changeName('NARYANPET')
);

store.dispatch(
    addhobby("Watching movie")
);

store.dispatch( addhobby("Employee !!!"));

us();
// console.log("Name should be Buddappa", store.getState());

// store.dispatch({
// type:'CHANGE-NAME',
// name: 'VM'

// });

// store.dispatch({
// type:'CHANGE-NAME',
// name: 'HYDERABAD'

// });
// console.log("Name should be Buddappa", store.getState());