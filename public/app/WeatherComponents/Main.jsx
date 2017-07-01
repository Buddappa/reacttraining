import React from 'react'
import ReactDOM from 'react-dom'
var NavBar = require('NavBar');

var Main = React.createClass({

    render: function () {

        return (
            <div>
                <h1>Welcome to Maint</h1>
                <NavBar />
                {this.props.children}
            </div>
        );
    }

});

module.exports = Main;