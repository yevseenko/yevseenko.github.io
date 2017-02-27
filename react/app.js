var helloMassage = React.createClass({
	render: function(){
		return <h3>Hello {this.props.massage}</h3>;
	}
});
 
ReactDOM.render(
  <helloMassage massage="World" />,
  document.getElementById('root')
);