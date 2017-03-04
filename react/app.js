class App extends React.Component {
	render() {
		return (
			<div className='wrapper'>
				<Menu />
				<Jumbotron />
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
				<a href='#'>Fourth menu item</a>
				<a href='#'>Fifth menu item</a>
				<Clock />
			</div>
		);
	}
}

class Jumbotron extends React.Component {
	render() {
		return (
			<div className='jumbotron'>
				<p>Some text must be here</p>
			</div>
		);
	}
}

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
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
			<div className='clock'>
				{this.state.date.toLocaleTimeString()}
			</div>
		);
	}
}


ReactDOM.render(
	<App />,
	document.getElementById('root')
);
