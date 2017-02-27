var HelloMessage = React.createClass({
	render: function(){
		return <h3>Hello {this.props.message}</h3>;
	}
});
 
ReactDOM.render(
  <HelloMessage message='World' />,
  document.getElementById('root')
);