var HelloMessage = React.createClass({
	render: function(){
		return <h3>Hello {this.props.message}</h3>;
	}
});

var SecondMessage = React.createClass({
	render: function() {
		return <h3>The World is {this.props.message}</h3>;
	}
});
 
ReactDOM.render(
  <HelloMessage message='World' />,
  document.getElementById('root')
);

ReactDOM.render(
	<SecondMessage message='mine' />,
	document.getElementById('root')
);