

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

var WelcomeMessage=React.createClass({


render: function () {

     var name = this.props.name;
      var city = this.props.city;
      var email = this.props.email;
      var country = this.props.country;
      return (
        <div>
          <h1>Name: {name}</h1>
          <h1>city: {city}</h1>
          <h1>email: {email}</h1>
          <h1>country: {country}</h1>
          <p></p>
        </div>
      );
    }
});

var WelcomeForm=React.createClass({

onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};

    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';

    

     var cityRef = this.refs.city;
    var city = cityRef.value;
    cityRef.value = '';

     var emailRef = this.refs.email;
    var email = emailRef.value;
    emailRef.value = '';

    var countryRef = this.refs.country;
    var country = countryRef.value;
    countryRef.value = '';

    if (typeof name === 'string' && name.length > 0) {
    
     this.refs.name.value = '';
      updates.name = name;
    }

     if (typeof city === 'string' && city.length > 0) {
      this.refs.city.value = '';
      updates.city = city;
    }

    if (typeof email === 'string' && email.length > 0) {
     this.refs.email.value = '';
      updates.email = email;
    }

     if (typeof country === 'string' && country.length > 0) {
      this.refs.country.value = '';
      updates.country = country;
    }

    this.props.onNewData(updates);
  },
 render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter name"/>
        </div>
        <div>
          <textarea ref="city" placeholder="Enter city"></textarea>
        </div>
         <div>
          <textarea ref="email" placeholder="Enter email"></textarea>
        </div>
         <div>
          <textarea ref="country" placeholder="Enter country"></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }

});
var firstName = 'Amarjeet';

ReactDOM.render(
  <Welcome name={firstName}/>,
  document.getElementById('app')
);