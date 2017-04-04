class App extends React.Component {
		constructor(props) {
		super(props);
		this.state = {
			menu: [
			    { key: 1, name: 'Home', link: '#home' },
			    { key: 2, name: 'App', link: '#app' },
			    { key: 3, name: 'Player', link: '#player' },
			    { key: 4, name: 'Enemy', link: '#enemy' },
			    { key: 5, name: 'About us', link: '#about' }
			],
			currentSel: []
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {
			e.preventDefault();
			const newId = generateId();
			const newName = e.target.text;
			const newItem = {id: newId, name: newName}
			const updatedItem = addItem(this.state.currentSel, newItem);
			this.setState({
				currentSel: updatedItem
			})
		}

	render() {
		return (
			<div className='wrapper'>
				<Menu menu={this.state.menu} handleClick={this.handleClick}/>
				<Jumbotron menu={this.state.menu} currentSel={this.state.currentSel}/>
			</div>
		);
	}
}

const generateId = () => Math.floor(Math.random()*100000);
const addItem = (list, item) => [...list, item];

const Menu = (props) => {
		return (
			<nav>
				{
					props.menu.map((item) => <a key={item.id} href={item.href} onClick={props.handleClick}>{item.name} |</a>)
				}
			</nav>
		);
	}

function Jumbotron(props) {
		return (
			<div className='jumbotron'>
				<ul>{props.currentSel.map((item) => <li>{item.name}</li>)}</ul>
			</div>
		);
	}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
