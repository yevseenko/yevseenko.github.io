class App extends React.Component {
		constructor(props) {
		super(props);
		this.state = {
			menu: [
				{id: 1, name: 'ИКВ', href: '#'},
				{id: 2, name: 'СЕС', href: '#'},
				{id: 3, name: 'СОА', href: '#'},
				{id: 4, name: 'ТЮА', href: '#'},
				{id: 5, name: 'САС', href: '#'}
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
const generateId = () => Math.floor(Math.random()*10000);

const addItem = (list, item) => [...list, item];

const Menu = (props) => {
		return (
			<div className='nav'>
				{
					props.menu.map((item) => <a key={item.id} href={item.href} onClick={props.handleClick}>{item.name}</a>)
				}
			</div>
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
