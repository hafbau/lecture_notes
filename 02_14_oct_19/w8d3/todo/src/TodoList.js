import React from 'react'
import TodoListItem from './TodoListItem';

export default function TodoList({todos, deleteTodo, checkItem}) {
  
  const todoList = todos.map(todo => <TodoListItem key={todo.id} {...todo} deleteTodo={deleteTodo} checkItem={checkItem}/>)
  
  return (
    <ul>
      {todoList}
    </ul>
  )
}
