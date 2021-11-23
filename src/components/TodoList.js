import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import axios from 'axios';

function TodoList() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text:"UAS PAW",
      description:"UTS jam 8 malem"
    },
    {
      id:2,
      text:"Tugas Persdif",
      description:"Tugas persdif halaman 206 nomor 1-15"
    },
    {
      id:3,
      text:"UAS PBO",
      description:"Bikin program mengenai CRUD dengan C++"
    },
    {
      id:4,
      text:"Balikin buku ke perpus pusat",
      description:"deadlinenya hari jumat jam 13.00"
    },
    {
      id:5,
      text:"Beli Shampo",
      description:"Shampo miranda jeruk nipis"
    },


  ]);



  const addTodo = todo => {
    // if (!todo.text || /^\s*$/.test(todo.text)) {
    //   return;
    // }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    // if (!newValue.text || /^\s*$/.test(newValue.text)) {
    //   return;
    // }

    // setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    // const removedArr = [...todos].filter(todo => todo.id !== id);

    // setTodos(removedArr);
  };

  const completeTodo = id => {
    // let updatedTodos = todos.map(todo => {
    //   if (todo.id === id) {
    //     todo.isComplete = !todo.isComplete;
    //   }
    //   return todo;
    // });
    // setTodos(updatedTodos);
  };

  return (
    <>
      <h1>Aplikasi Todo List</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;