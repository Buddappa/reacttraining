var Welcome=React.createClass(
{
      
      getDefaultProps: function()
      {
 return{
name:'weeeee',
city:'hyd'

 };

      },
render:function()
{


var name=this.props.name;

return(

<div>
   <h1>Hello 111 {name}  {this.props.city}</h1>
   <p>VM React Training eeee!! </p>
  

   </div>
)
}
});


ReactDOM.render(<Welcome city="HYD"/> , document.getElementById('app'));