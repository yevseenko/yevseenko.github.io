var state = {};

state.todos = [];
state.filters = [];
state.selectedFilter;

function render(state) {
	document.body.innerHTML = `
		<input type="text"></input>

		<ul>
		</ul>

		<ul>
		</ul>

	`;
}