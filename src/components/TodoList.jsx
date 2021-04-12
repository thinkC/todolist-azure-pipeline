import React from 'react';
import TodoListItem from '../components/TodoListItem'

const TodoList = ({ todos, removeTodo }) => {
    return (
        <>
            {todos && todos.map((todo) => {
                return <TodoListItem todo={todo} key={todo.id} removeTodo={removeTodo} />
            })}
        </>
    )
}

export default TodoList;