import React, { useState } from 'react';
import './style.css';
import HeaderTodo from './header/todoheader';
import TodoListHolder from './todo_list/todoListHolder';
import { Data } from './data';
export default function App() {
  const [todoItems, setTodoItems] = useState(Data);

  const onSaveHandler = (name) => {
    setTodoItems([
      ...todoItems,
      {
        id: Math.random().toString(),
        name,
      },
    ]);
  };
  return (
    <div>
      <HeaderTodo onSaveTodoData={onSaveHandler} />
      <div>
        <TodoListHolder todoNames={todoItems} />
      </div>
    </div>
  );
}
