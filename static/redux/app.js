const state = {};

state.todos = [];
state.filters = [];
state.selectedFilter;
state.newTodoTitle;

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

function render(state) {
	document.body.innerHTML = renderToString(state);
}

function renderTodos(todos) {
	return todos.map( todo => {
		return `<li>${todo.title}</li>`
	})
	.join('\n');
}

render(state);

const input = document.querySelector('input');

input.addEventListener('change', e => {
	console.log(e);
})