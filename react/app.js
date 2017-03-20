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

const menuList = ['Home', 'Second menu item', 'Third menu item', 'Fourth menu item', 'About us'];

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callbac
  }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

class Menu extends React.Component {

	render() {
		return (
			<div className='nav'>
				<ActionLink />
				<Toggle />
				<Search />
			</div>
		);
	}
}

class Box extends React.Component {
	render() {
		return (
			<div className='box'>
				<p>Sed laoreet sodales turpis, et ultricies lectus imperdiet feugiat. Fusce vel aliquam massa. Nunc ut fermentum neque, in suscipit dui. Pellentesque leo purus, consectetur bibendum sagittis quis, varius et dolor. Proin aliquam placerat malesuada. Vivamus mattis neque felis, eget pharetra mi mattis et. Curabitur euismod risus quis ultricies ornare. Mauris vel eros dignissim, condimentum turpis sit amet, porta arcu. Maecenas commodo massa dui, in tempor lacus iaculis ac. Fusce hendrerit faucibus dui, ac euismod erat placerat at. Donec vel finibus odio. Aenean porta, eros sit amet facilisis vestibulum, orci leo accumsan libero, eu pulvinar purus lacus aliquet metus. Vivamus vestibulum elit ut consectetur pulvinar. Proin id convallis augue. Proin scelerisque faucibus porta.</p>
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
