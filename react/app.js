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
				<ul className='menu'>
					<li>First menu item</li>
					<li>Second menu item</li>
					<li>Third menu item</li>
				</ul>
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