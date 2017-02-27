class App extends React.Component {
	render() {
		return (
			<div className='wrapper'>
				<Menu />
				<Clock />
			</div>
			);
	}
}

class Menu extends React.Component {
	render() {
		return (
			<div className='nav'>
					<a href='#'>First menu item</a>
					<a href='#'>Second menu item</a>
					<a href='#'>Third menu item</a>
			</div>
			);
	}
}

class Clock extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {date: new Date()};
  	}
  	componentDidMount() {
  		this.timerID = setInterval(
      		() => this.tick(),
      		1000
    	);
  	}
  	tick() {
    	this.setState({
      		date: new Date()
    	});
  	}
  	componentWillUnmount() {
  		clearInterval(this.timerID);
  	}
  	render() {
    	return (
      		<div>
        		<p>It is {this.state.date.toLocaleTimeString()}.</p>
      		</div>
    	);
  	}
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);