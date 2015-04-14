var React = require('react');
var Todo = require('./todo');

class TodoList extends React.Component {
	render() {
		var todos = this.props.todos.map(function(todo){
			return (<Todo todo={todo} />);
		});
		return (
			<ul>
				{todos}
			</ul>
		);
	}
}

module.exports = TodoList;
