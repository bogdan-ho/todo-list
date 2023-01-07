import React from 'react';
import { ListGroup } from 'react-bootstrap/esm';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
  const todoList = ['todo1', 'todo2', 'todo3'];

  return (
    <ListGroup className="w-50">
      {todoList.map((item) => (
        <ToDoItem key={item} value={item} />
      ))}
    </ListGroup>
  );
};

export default ToDoList;
