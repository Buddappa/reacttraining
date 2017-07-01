
var WelcomeMessage=require("WelcomeMessage");
var WelcomeForm=require("WelcomeForm");

var Welcome = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      city: 'HYD',
      email:'buddappa@yahoo.com',
      country:'India'
    };
  },
  getInitialState: function () {
    return {
        name: this.props.name,
        city: this.props.city,
        email: this.props.email,
        country: this.props.country
    };
  },

   handleNewData: function (updates) {
    this.setState(updates);
  },
  
  render: function () {
    var name = this.state.name;
    var city = this.props.city;
    var email=this.props.email;
    var country=this.props.country;

    return (
      <div>
        <WelcomeMessage name={name} city={city} email={email} country={country}/>

        <WelcomeForm onNewData={this.handleNewData}/>     
      </div>
    );
  }
});

module.exports=Welcome;