import React, { useState } from 'react';
import './todoheader.css';
// newElementHandler = (e) => {
//   return '';
// };

const HeaderTodo = (props) => {
  const [enteredTodo, setNewTodo] = useState('');

  const titleChangeHandler = (event) => {
    setNewTodo(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveTodoData(enteredTodo);
    setNewTodo('');
  };
  return (
    // <form id="myDIV" className="header" onClick={newElementHandler}>
    <form id="myDIV" className="header" onSubmit={submitHandler}>
      <h2>My To Do List</h2>
      <input
        type="text"
        id="myInput"
        value={enteredTodo}
        placeholder="Title..."
        onChange={titleChangeHandler}
      />
      <button type="submit" className="addBtn">
        Add
      </button>
    </form>
  );
};
export default HeaderTodo;
