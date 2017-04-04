class App extends React.Component {
		constructor(props) {
		super(props);
		this.state = {
			menu: [
			    { key: 1, name: 'Home', link: '#home' },
			    { key: 2, name: 'awesomeGame', link: '#app' },
			    { key: 3, name: 'setPlayer', link: '#player' },
			    { key: 4, name: 'setEnemy', link: '#enemy' },
			    { key: 5, name: 'About', link: '#about' }
			],
			currentSel: ''
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {
			if (e.target.text === 'Home') {
				this.setState({
					currentSel: <Home />
				});
			}

			if (e.target.text === 'awesomeGame') {
				this.setState({
					currentSel: <Game />
				});
			}

			if (e.target.text === 'setPlayer') {
				this.setState({
					currentSel: <Player />
				});
			}

			if (e.target.text === 'setEnemy') {
				this.setState({
					currentSel: <Enemy />
				});
			}

			if (e.target.text === 'About') {
				this.setState({
					currentSel: <About />
				});
			}
		}

	render() {
		return (
			<div className='wrapper'>
				<Menu menu={this.state.menu} handleClick={this.handleClick}/>
				<Page currentSel={this.state.currentSel}/>
			</div>
		);
	}
}

const generateId = () => Math.floor(Math.random()*100000);
const addItem = (list, item) => [...list, item];

const Home = (props) => {
	return (
			<div>Home</div>
		)
}

const Game = (props) => {
	return (
			<div>There is awesomeGame</div>
		)
}

const Player = (props) => {
	return (
			<div>You can setup your player</div>
		)
}

const Enemy = (props) => {
	return (
			<div>Now you can setup your enemy</div>
		)
}

const About = (props) => {
	return (
			<div>About awesomeGame</div>
		)
}

const Menu = (props) => {
		return (
			<nav>
				{
					props.menu.map((item) => <a key={item.key} href={item.link} onClick={props.handleClick}>{item.name}</a>)
				}
			</nav>
		);
	}

function Page(props) {
		return (
			<div className='page'>
				{props.currentSel}
			</div>
		);
	}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
