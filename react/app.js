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
			currentSel: ''
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {
			e.preventDefault();
			this.setState({
				currentSel: e.target.text
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

const generateId = () => Math.floor(Math.random()*100000)

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
				<ul><li>{props.currentSel}</li></ul>
			</div>
		);
	}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
