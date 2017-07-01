import React from 'react'


var WelcomeForm=React.createClass({

onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};

    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';

    

    //  var cityRef = this.refs.city;
    // var city = cityRef.value;
    // cityRef.value = '';

    //  var emailRef = this.refs.email;
    // var email = emailRef.value;
    // emailRef.value = '';

    // var countryRef = this.refs.country;
    // var country = countryRef.value;
    // countryRef.value = '';

    if (typeof name === 'string' && name.length > 0) {
    
     this.refs.name.value = '';
      updates.name = name;
    }

    //  if (typeof city === 'string' && city.length > 0) {
    //   this.refs.city.value = '';
    //   updates.city = city;
    // }

    // if (typeof email === 'string' && email.length > 0) {
    //  this.refs.email.value = '';
    //   updates.email = email;
    // }

    //  if (typeof country === 'string' && country.length > 0) {
    //   this.refs.country.value = '';
    //   updates.country = country;
    // }

    this.props.onNewData(updates);
  },
 render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter name"/>
        </div>
        {/*<div>
          <input ref="city" type="text"  placeholder="Enter city"></input>
        </div>
         <div>
          <input ref="email" type="text" placeholder="Enter email"></input>
        </div>
         <div>
          <input ref="country" type="text" placeholder="Enter country"></input>
        </div>*/}
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }

});

module.exports=WelcomeForm;