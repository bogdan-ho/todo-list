import React, { useState } from 'react';
import { CloseButton, ListGroup } from 'react-bootstrap/esm';

const ToDoItem = ({ value }) => {
  const [removeButton, setRemoveButton] = useState(false);
  const { id, task, completed } = value;

  return (
    <ListGroup.Item className="d-flex justify-content-between" onMouseEnter={() => setRemoveButton(true)} onMouseLeave={() => setRemoveButton(false)} action id={id}>
      {!completed ? <del className="text-secondary">task</del> : task}
      {removeButton ? <CloseButton /> : null}
    </ListGroup.Item>
  );
};

export default ToDoItem;
