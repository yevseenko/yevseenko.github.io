class App extends React.Component {
	state = {
		menu: []
	}

	componentDidMount() {
		loadState()
    		.then(menu => this.setState({menu}));
  }

	render() {
		return (
			<div className='container'>
				<Home />
			</div>
		);
	}
}

const loadState = () => {
    return { menu: [
				{ key: 1, name: 'Home', link: '#home' },
				{ key: 2, name: 'awesomeGame', link: '#app' },
				{ key: 3, name: 'About', link: '#about' }
			]
		}
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