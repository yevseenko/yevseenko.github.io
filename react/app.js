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

class Menu extends React.Component {
	render() {
		return (
			<div className='nav'>
				<a href='#'>First menu item</a>
				<a href='#'>Second menu item</a>
				<a href='#'>Third menu item</a>
				<a href='#'>Fourth menu item</a>
				<a href='#'>Fifth menu item</a>
				<Clock />
				<Search />
			</div>
		);
	}
}

class Search extends React.Component {
	render() {
		return (
			<div>
				<input type='text' />
			</div>
		);
	}
}

class Jumbotron extends React.Component {
	render() {
		return (
			<div className='jumbotron'>
				<p>Что такое Lorem Ipsum?
Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
			</div>
		);
	}
}

class Clock extends React.Component {
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
}


ReactDOM.render(
	<App />,
	document.getElementById('root')
);
