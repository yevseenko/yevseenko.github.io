ReactDOM.render(
    <App />,
    document.getElementById('root')
);

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>List of Todos</h2>
                </div>
                <div className="Todo-App">
                    <form>
                        <input type="text" />
                    </form>
                    <div class="Todo-List">
                        <ul>
                            <li><input type="checkbox" /> Learn JSX </li>
                            <li><input type="checkbox" /> Some new todo </li>
                            <li><input type="checkbox" /> Buil an awesome App </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}