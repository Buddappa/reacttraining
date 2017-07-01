import React from 'react'
import ReactDOM from 'react-dom'

var WeatherData = require("WeatherData");
var WeatherForm = require("WeatherForm");
var openWeatherMap = require("openWeatherMap");


var Weather = React.createClass({

  getInitialState: function () {
    return {
      isLoading: false
    };
  },

  handleNewData: function (location) {
    var that = this;
    // this.setState({ location=true });
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState(
        {
          location: location,
          temp: temp
        });

    }, function (errorMessage) {
        alert(errorMessage);

      })
  },

  render: function () {
    var { isLoading, temp, location } = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather.......</h3>
      } else if (temp && location) {
        return <WeatherData temp={temp} location={location} />
      }
    }
    return (
      <div>
        <h3>Weather Details</h3>
        <WeatherData name={name} />

        <WeatherForm onNewData={this.handleNewData} />
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;