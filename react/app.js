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
			currentSel: ''
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {
			this.setState({
				currentSel: e.target.text
			});
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
