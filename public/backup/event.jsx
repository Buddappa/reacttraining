var Welcome=React.createClass(
{
      
      getDefaultProps: function()
      {
        return{
            name:'weeeee',
            city:'hyd'

        };
      },

      onButtonClick:function(e)
      {
          e.preventDefault();

          var user=this.refs.user.value;
          alert(user);
      },
render:function()
{


var name=this.props.name;

return(

<div>
   <h1>Hello 111 {name}  {this.props.city}</h1>
   <p>VM React Training eeee!! </p>
  <form onSubmit={this.onButtonClick}>

<input type="text" ref="user"/>
<button>set Name</button>
      </form>

   </div>
)
}
});


ReactDOM.render(<Welcome city="HYD"/> , document.getElementById('app'));