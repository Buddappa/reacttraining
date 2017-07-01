import React from 'react'
import ReactDOM from 'react-dom'
var { Link } = require('react-router');
var Services=require('Services');
var About=require('About');
var Locator=require('Locator');

var NavBar = React.createClass({

    render: function () {

        return (

            <div>
                <h2>NarBar Components</h2>
                <Link to="/Locator">Locator</Link>
                <br/>
                <Link to="/About">About</Link>
                <br/>
                <Link to="/Services">Services</Link>
                <h1>Welcome to NavBar</h1>
            </div>

        );


    }

})

module.exports = NavBar;