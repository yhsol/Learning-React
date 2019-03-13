import React, { Component } from 'react';
import styled from 'styled-components';
import TodoItem from '../TodoItem';

const ListForm = styled.div`margin: 0;`;

class TodoList extends Component {
	render() {
		const { todos, onToggle, onRemove } = this.props;
		const todoList = todos.map((todo) => (
			<TodoItem
				key={todo.id}
				done={todo.done}
				onToggle={() => onToggle(todo.id)}
				onRemove={() => onRemove(todo.id)}
			>
				{todo.text}
			</TodoItem>
		));
		return <ListForm>{todoList}</ListForm>;
	}
}

export default TodoList;
