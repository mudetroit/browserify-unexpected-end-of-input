var React = require('react');
var TodoList = require('./todoList');

class TodoSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		}
	}

	render() {
		return (
			<div>
				<TodoList todos={this.state.todos} />
				<a onClick={this.addTodo}>Add Todo</a>
			</div>
		);
	}

	addTodo(e) {
		e.preventDefault();
		this.setState({todos: this.todos.concat({complete: false, text:'New Todo'})});
	}
}

module.exports = TodoSection;
