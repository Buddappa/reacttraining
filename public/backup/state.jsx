var Welcome=React.createClass(
{    
      getInitialState: function()
      {
        return{
            name:this.props.name,
            dept:this.props.dept
        };
      },

      onButtonClick:function(e)
      {
          e.preventDefault();

          var user=this.refs.name.value;
          var dept=this.refs.dept.value;
          
          this.setState({
              name:  user  ,
              dept:dept        
          }); 
      },
render:function()
{
var name1=this.state.name;
var dept=this.state.dept;
return(
<div>
   <h1>Hello {name1} {dept} </h1>
   <p>VM React Training eeee!! </p>
  <form onSubmit={this.onButtonClick}>

<input type="text" ref="name"/>
<input type="text" ref="dept"/>
<button>set Name</button>
      </form>

   </div>
)
}
});
ReactDOM.render(<Welcome city="HYD"/> , document.getElementById('app'));