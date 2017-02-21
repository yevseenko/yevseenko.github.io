const state = {};

state.todos = [];
state.filters = [];
state.selectedFilter;
state.newTodoTitle;

class StateStore {
	constructor(initialState = {}) {
		this.state = initialState;
		this.listeners = [];
	}

	set(key, value) {
		this.state[key] = value;
		this.listeners.forEach( listener => listener(this.state));
	}

	subscribe(listener) {
		this.listeners.push(listener);
	}
}

const stateStore = new StateStore({
	todos: [],
	newTodoTitle: '',
	
});

stateStore.subscribe(render);

function render(state) {
	document.body.innerHTML = renderToString(state);
}

function renderToString(state) {
	return `
		<input type="text" value="${state.newTodoTitle || ''}"></input>

		<ul>
			${renderTodos(state.todos)}
		</ul>

		<ul>
		</ul>

	`;
}

function renderTodos(todos) {
	return todos.map( todo => {
		return `<li>${todo.title}</li>`
	})
	.join('\n');
}

render(state);

document.body.addEventListener('keypress', e => {
	const input = document.querySelector('input');
	state.newTodoTitle = input.value;
});