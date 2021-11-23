import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({todos}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });
  console.log(todos);
  const submitUpdate = value => {
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.status ? 'todo-row' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => {}}>
        <p className="todo-text">{todo.title}</p>
        <p className="todo-desc">{todo.description}</p>
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => {}}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;