import React, { useState } from 'react';
import { CloseButton, ListGroup } from 'react-bootstrap/esm';

const ToDoItem = ({ value }) => {
  const [removeButton, setRemoveButton] = useState(false);

  return (
    <ListGroup.Item className="d-flex justify-content-between" onMouseEnter={() => setRemoveButton(true)} onMouseLeave={() => setRemoveButton(false)}>
      {value}
      {removeButton ? <CloseButton /> : null}
    </ListGroup.Item>
  );
};

export default ToDoItem;
