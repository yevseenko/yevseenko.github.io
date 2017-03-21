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
			]
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {
			e.preventDefault();
			console.log(e.target.text);
		}

	render() {
		return (
			<div className='wrapper'>
				<Menu menu={this.state.menu} handleClick={this.handleClick}/>
				<Jumbotron />
			</div>
		);
	}
}

const Menu = (props) => {
		return (
			<div className='nav'>
				{
					props.menu.map((item) => <a key={item.id} href={item.href} onClick={props.handleClick}>{item.name}</a>)
				}
			</div>
		);
	}

const Jumbotron = (props) => {
		return (
			<div className='jumbotron'>
				<p>{props.menu.map((item) => {item.name})}</p>
			</div>
		);
	}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
