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

			currentSel: <Home />,

			player: {
				name: 'myPlayer',
				hitpoints: 150,
				damage: 50
			},

			enemy: {
				name: 'myPlayer',
				hitpoints: 150,
				damage: 35
			}
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
					currentSel: <Game player={this.state.player} enemy={this.state.enemy}/>
				});
			}

			if (e.target.text === 'setPlayer') {
				this.setState({
					currentSel: <Player player={this.state.player}/>
				});
			}

			if (e.target.text === 'setEnemy') {
				this.setState({
					currentSel: <Enemy enemy={this.state.enemy}/>
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
			<div>Homepage of awesome game.. =)</div>
		)
}

const Game = (props) => {
	return (
			<div>There is awesomeGame</div>
		)
}

const Player = (props) => {
	return (
			<div>You can setup your player<div>{props.player.name},{props.player.hitpoints},{props.player.damage}</div></div>
		)
}

const Enemy = (props) => {
	return (
			<div>Now you can setup your enemy<div>{props.enemy.name},{props.enemy.hitpoints},{props.enemy.damage}</div></div>
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

const Page = (props) => {
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
