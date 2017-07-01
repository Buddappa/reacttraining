import React from 'react'


var WelcomeMessage=React.createClass({


render: function () {

     var name = this.props.name;
    //   var city = this.props.city;
    //   var email = this.props.email;
    //   var country = this.props.country;
      return (
        <div>
          <h1>Name: {name}</h1>
          {/*<h1>city: {city}</h1>
          <h1>email: {email}</h1>
          <h1>country: {country}</h1>
          <p></p>*/}
        </div>
      );
    }
});

module.exports=WelcomeMessage;