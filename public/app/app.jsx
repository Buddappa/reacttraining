import React from 'react'
import ReactDOM from 'react-dom'
// var { Route, Router, IndexRoute, hasHistory } = require('react-router');
// var Main = require('Main');
// var Weather = require('Weather');
// var About = require('About');
// var Locator = require('Locator');
// var Services = require('Services');


ReactDOM.render(
  <p>Boilerplate 3 project</p>
//   <Router history={hasHistory}>
//     <Route path="/" component={Main}>
//     {/*<Route path="/" component={Weather}>*/}
//  {/*<IndexLink to="/" >Home</IndexLink>*/}
//       <Route path="/About" component={About} />
//       <Route path="/Services" component={Services} />
//       <Route path="/Locator" component={Locator} />

//     </Route>
//   </Router>
  ,
  document.getElementById('app')
);

require('./redux-demo2.jsx');