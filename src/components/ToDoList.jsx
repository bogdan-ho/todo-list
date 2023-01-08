import React from 'react';
import { ListGroup } from 'react-bootstrap/esm';
import { useSelector } from 'react-redux';
import _uniqueId from 'lodash/uniqueId';

import { tasksSelector } from '../slices/tasksSlice';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
  const tasks = useSelector(tasksSelector.selectAll);

  return (
    <ListGroup className="w-50">
      {tasks.map((task) => (
        <ToDoItem key={_uniqueId('key-')} value={task} />
      ))}
    </ListGroup>
  );
};

export default ToDoList;
