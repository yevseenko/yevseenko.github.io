class App extends React.Component {

	componentDidMount() {
		loadState()
    	.then(menu => this.setState({menu}))
    	.then(control => this.setState({control}))
    	.then(player => this.setState({player}))
    	.then(enemy => this.setState({enemy}))
  }


	const handleClick = (e) => {
		if (e.target.text === 'Home') {
			this.setState({
				currentSel: <Home />
			});
		}

		if (e.target.text === 'awesomeGame') {
			this.setState({
				currentSel: <Game player={this.state.player} 
					enemy={this.state.enemy} 
					handleAction={this.handleAction} 
					control={this.state.control}/>
			});
		}

		if (e.target.text === 'About') {
			this.setState({ currentSel: <About /> });
		}
	}

	const handleAction = (evt) => {
		evt.preventDefault();
			if (evt.target.innerHTML === 'Damage up') {
				this.setState({ player: {
					name: 'myPlayer',
					hitpoints: 150,
        	currentHp: 150,
					damage: 90
				} });
				console.log(this.state.player.damage);
			}
	}

	render() {
		return (
			<div className='container'>
				<Menu menu={this.state.menu} handleClick={this.handleClick} />
				<Page currentSel={this.state.currentSel} />
			</div>
		);
	}
}

const generateId = () => Math.floor(Math.random() * 100000);
const toggleControl = (control) => ({ ...control, used: !control.used })
const addItem = (list, item) => [...list, item];
const loadState = () => {
    return {
			menu: [
				{ key: 1, name: 'Home', link: '#home' },
				{ key: 2, name: 'awesomeGame', link: '#app' },
				{ key: 3, name: 'About', link: '#about' }
			],

			control: [
				{ name: 'Damage up', used: false, message: ''},
				{ name: 'Armour up', used: false, message: ''},
				{ name: 'Restore HP', used: false, message: ''}
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
}

const Home = (props) => {
	return (
		<div className='well well-sm'>Homepage of awesome game.. =)</div>
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
		<div className='col-xs-4'>
			<div className='well well-sm'>
				Player
      	<div><b>Name:</b> {props.player.name}</div>
      	<div><b>Hitpoints:</b> {props.player.currentHp}/{props.player.hitpoints}</div>
      	<div><b>Damage:</b> {props.player.damage}</div>
      </div>
    </div>
	);
}

const Panel = (props) => {
	return (
		<div className='col-xs-4'>
			<div className='well well-sm'>
				Panel with action's
			</div>
		</div>
	);
}

const Control = (props) => {
	return (
		<div className='row'>
			<div className='col-xs-12'>
				<div className='well well-sm'>
        	<div className='btn-group btn-group-sm'>
          	<button className='btn'><b>Control Panel:</b></button>
				  	{
				  		props.control.map((item) => <button className='btn btn-primary' 
				  			key={generateId()}
				  			data-used={item.used} 
				  			onClick={props.handleAction}>
				  				{item.name}
				  			</button>)
				  	}
        	</div>
				</div>
			</div>
		</div>
	);
}

const Enemy = (props) => {
	return (
		<div className='col-xs-4'>
			<div className='well well-sm'>
				Enemy
      	<div><b>Name:</b> {props.enemy.name}</div>
      	<div><b>Hitpoints:</b> {props.enemy.currentHp}/{props.enemy.hitpoints}</div>
      	<div><b>Damage:</b> {props.enemy.damage}</div>
      </div>
    </div>
	);
}

const About = (props) => {
	return (
		<div className='well well-sm'>About awesomeGame</div>
	);
}

const Menu = (props) => {
	return (
		<nav className='menu'>
			<div className='btn-group'>
				{
					props.menu.map((item) => <a className='btn btn-primary' key={item.key} href={item.link} onClick={props.handleClick}>{item.name}</a>)
				}
			</div>
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

if (!Object.assign) {
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(target, firstSource) {
      'use strict';
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
      }

      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) {
          continue;
        }

        var keysArray = Object.keys(Object(nextSource));
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
      return to;
    }
  });
}