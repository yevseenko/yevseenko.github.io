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

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}



class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Click' : 'Setting'}
      </button>
    );
  }
}

class Menu extends React.Component {
	constructor() {
		super();
		this.state = {
			menu: [
				{id: 1, name: 'Home', href: '#'},
				{id: 2, name: 'Second menu item', href: '#'},
				{id: 3, name: 'Third menu item', href: '#'},
				{id: 4, name: 'Fourth menu item', href: '#'},
				{id: 5, name: 'About us', href: '#'}
			]
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
			console.log('Link clicked!');
		}

	render() {
		return (
			<div className='nav'>
				{
					this.state.menu.map((item) => <a key={item.id} href={item.href} onClick={handleClick}>{item.name}</a>)
				}
				<Search />
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
				<p>Some text here</p>
			</div>
		);
	}
}


ReactDOM.render(
	<App />,
	document.getElementById('root')
);
