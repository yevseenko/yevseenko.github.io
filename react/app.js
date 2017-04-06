class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: [
				{ key: 1, name: 'Home', link: '#home' },
				{ key: 2, name: 'awesomeGame', link: '#app' },
				{ key: 3, name: 'About', link: '#about' }
			],

			control: [
				{ isUsed: false, name: 'Damage up' },
				{ isUsed: false, name: 'Armour up'},
				{ isUsed: false, name: 'Restore HP'}
			],

			currentSel: <Home />,

			player: {
				name: 'myPlayer',
				hitpoints: 150,
        currentHp: 150,
				damage: 50
			},

			enemy: {
				name: 'myEnemy',
				hitpoints: 150,
        currentHp: 150,
				damage: 35
			}
		}

		this.handleClick = this.handleClick.bind(this);
		this.handleAction = this.handleAction.bind(this);
	}

	handleClick(e) {
		if (e.target.text === 'Home') {
			this.setState({
				currentSel: <Home />
			});
		}

		if (e.target.text === 'awesomeGame') {
			this.setState({
				currentSel: <Game player={this.state.player} enemy={this.state.enemy} handleAction={this.handleAction}/>
			});
		}

		if (e.target.text === 'About') {
			this.setState({
				currentSel: <About />
			});
		}
	}

	handleAction(e) {
			console.log(e.target.used);
	}

	render() {
		return (
			<div className='container'>
				<Menu menu={this.state.menu} handleClick={this.handleClick} />
				<Page currentSel={this.state.currentSel}/>
			</div>
		);
	}
}

const generateId = () => Math.floor(Math.random() * 100000);
const addItem = (list, item) => [...list, item];

const Home = (props) => {
	return (
		<div>Homepage of awesome game.. =)</div>
	)
}

const Game = (props) => {
	return (
		<div>
			<Control handleAction={props.handleAction} control={props.control}/>
			<div className='row'>
				<Player player={props.player} />
				<Panel />
				<Enemy enemy={props.enemy} />
			</div>
		</div>
	);
}

const Player = (props) => {
	return (
		<div className='col-xs-4'>Player
      <div><b>Name:</b> {props.player.name}</div>
      <div><b>Hitpoints:</b> {props.player.currentHp}/{props.player.hitpoints}</div>
      <div><b>Damage:</b> {props.player.damage}</div>
    </div>
	);
}

const Panel = (props) => {
	return (
		<div className='col-xs-4'>Panel with action's</div>
	);
}

const Control = (props) => {
	return (
		<div className='row'>
			<div className='col-xs-12'>
        <div className='btn-group btn-group-sm'>
          <button className='btn'><b>Control Panel:</b></button>
				  {
				  	props.control.map((item) => <button className='btn btn-primary' used={props.isUsed} onClick={props.handleAction}>{item.name}</button>)
				  }
        </div>
			</div>
		</div>
	);
}

const Enemy = (props) => {
	return (
		<div className='col-xs-4'>Enemy
      <div><b>Name:</b> {props.enemy.name}</div>
      <div><b>Hitpoints:</b> {props.enemy.currentHp}/{props.enemy.hitpoints}</div>
      <div><b>Damage:</b> {props.enemy.damage}</div>
    </div>
	);
}

const About = (props) => {
	return (
		<div>About awesomeGame</div>
	);
}

const Menu = (props) => {
	return (
		<nav className='well well-sm'>
			{
				props.menu.map((item) => <a key={item.key} href={item.link} onClick={props.handleClick}>{item.name}</a>)
			}
		</nav>
	);
}

const Page = (props) => {
	return (
		<div className='well well-sm page'>
			{props.currentSel} 
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
