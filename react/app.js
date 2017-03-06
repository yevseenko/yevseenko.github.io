class App extends React.Component {
	render() {
		return (
			<div className='wrapper'>
				<Menu />
				<Jumbotron />
				<Box />
				<Box />
				<Box />
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
				<Search />
			</div>
		);
	}
}

class Box extends React.Component {
	render() {
		return (
			<div className='box'>
			</div>
		);
	}
}

class Search extends React.Component {
	render() {
		return (
				<input type='text' className='input-box'/>
		);
	}
}

class Jumbotron extends React.Component {
	render() {
		return (
			<div className='jumbotron'>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor neque, tempor non ex at, facilisis varius sapien. Morbi tristique pulvinar vestibulum. Integer mattis lectus consectetur, semper justo eget, facilisis erat. Phasellus ut risus velit. Aenean lacinia dapibus tincidunt. Nunc vitae finibus justo, et aliquam turpis. Phasellus luctus tortor eget erat interdum, nec accumsan elit mollis. Curabitur tincidunt nibh et orci accumsan lobortis. Quisque finibus dui vitae turpis volutpat, vitae tristique neque tristique. Proin magna erat, rhoncus at congue sit amet, tristique ac odio. Nam sem felis, mollis quis rhoncus vitae, sodales sit amet purus. Nunc a ante quis enim euismod tristique. Maecenas vel rutrum urna.</p>
			</div>
		);
	}
}

/* class Clock extends React.Component {
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
} */


ReactDOM.render(
	<App />,
	document.getElementById('root')
);
