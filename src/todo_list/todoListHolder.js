import React from 'react';
import './todoListHolder.css';
import Todolisttems from './todoitems';

const TodoListHolder = (props) => {
  return (
    <ul id="myUL">
      {props.todoNames.map((item) => (
        <Todolisttems value={item.name} />
      ))}
    </ul>
  );
};
export default TodoListHolder;
