import React, { useState } from 'react';
import { CloseButton, ListGroup, Form } from 'react-bootstrap/esm';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { actions } from '../slices/tasksSlice';

const ToDoItem = ({ value }) => {
  // const [removeButton, setRemoveButton] = useState(false);
  const { id, task, completed } = value;

  const dispatch = useDispatch();
  const handleCompleteTask = (taskId) => (event) => {
    console.log('taskId', taskId);
    console.log('complete task ', { id: taskId, task, completed: true });
    console.log('complete task ', { id: taskId, task, completed: true });
    console.log('event', event);

    console.log('event.target.checked', event.target.checked);
    dispatch(actions.completeTask({ id: taskId, changes: { completed: !completed } }));
  };

  const handleChange = (event) => {
    console.log('event', event);
    console.log('event.target.value', event.target.value);
    console.log('event.target.checked', event.target.checked);
    // dispath на иземениние task
  };

  return (
    <InputGroup className="mb-2" onInput={console.log('onInput')} onSelect={console.log('onSelect')}>
      <Form.Check onChange={handleCompleteTask(id)} checked={completed} className="input-group-text" aria-label="Checkbox for following text input" />
      <Form.Control
        aria-label="Text input with checkbox"
        placeholder={task}
        disabled={completed}
        onChange={handleChange}
      />
    </InputGroup>
  );
};

export default ToDoItem;
