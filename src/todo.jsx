var React = require('react');
var Todo = require('./todo');

class Todo extends React.Component {
	render() {
		return (
			<li>{this.props.todo.text}</li>
		);
	}
}

module.exports = Todo;
