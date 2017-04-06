class App extends React.Component {
	state = {
		menu: []
	}
	
	componentDidMount() {
		loadState()
  }

	render() {
		return (
			<div className='container'>
				<Home />
				{this.state.menu}
			</div>
		);
	}
}

const loadState = () => {
	const state = { menu: [
				{ key: 1, name: 'Home', link: '#home' },
				{ key: 2, name: 'awesomeGame', link: '#app' },
				{ key: 3, name: 'About', link: '#about' }
			]
		}
	const menu = (menu) => this.setState({menu});
	return menu(state.menu);
}

const Home = (props) => {
	return (
		<div className='well well-sm'>Homepage of awesome game.. =)</div>
	)
}


ReactDOM.render(
	<App />,
	document.getElementById('root')
);