import React from 'react'


var  WeatherForm=React.createClass({

onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};

    var nameRef = this.refs.location;
    var location = nameRef.value;
    nameRef.value = '';

    if (typeof location === 'string' && location.length > 0) {
    
     this.refs.location.value = '';
      location = location;
    }
    this.props.onNewData(location);
  },
 render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="location" placeholder="Enter name"/>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
});

module.exports=WeatherForm;