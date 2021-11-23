import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import axios from 'axios';

function TodoList({data}) {
  const [todos, setTodos] = useState();
  useEffect(() => {
    setTodos(data);
    console.log(data);
  }, [])
  return (
    <div className="todolist-container">
      <h1>Aplikasi Todo List</h1>
      <Todo
        todos={data}
      />
    </div>
  );
}

export default TodoList;