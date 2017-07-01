import React from 'react'

var WeatherData = React.createClass({

  render: function () {
    var { temp, location } = this.props;

    return (
      <div>
        <h1>It's it{temp} in {location} </h1>
        <p></p>
      </div>
    );
  }
});

module.exports = WeatherData;