var Welcome=React.createClass(
{
render()
{


var name=this.props.name;
return(

<div>
   <h1>Hello 111 {name}  {this.props.name1}</h1>
   <p>VM React Training eeee!! </p>
   
   </div>
)
}
});

Welcome.defaultProps=
{

name1:"Welcome to HYd"

}
ReactDOM.render(<Welcome name="WELcome to Props"/> , document.getElementById('app'));