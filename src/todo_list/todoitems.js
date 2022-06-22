import React, { useState } from 'react';
import './todoitems.css';
const Todolisttems = (props) => {
  const [title, setTitle] = useState(props.title);

  return <li>{props.value}</li>;
};
export default Todolisttems;
