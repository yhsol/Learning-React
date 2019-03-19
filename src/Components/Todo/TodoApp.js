import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './Input';
import TodoList from './TodoList';

class TodoApp extends Component {
	render() {
		return (
			<PageTemplate>
				<TodoInput />
				<TodoList />
			</PageTemplate>
		);
	}
}

export default TodoApp;
