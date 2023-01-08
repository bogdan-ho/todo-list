import React, { useState } from 'react';
import { CloseButton, ListGroup, Form } from 'react-bootstrap/esm';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { actions } from '../slices/tasksSlice';

const ToDoItem = ({ value }) => {
  // const [removeButton, setRemoveButton] = useState(false);
  const { id, task, completed } = value;
  const [currentTask, setCurrentTask] = useState(task)

  const dispatch = useDispatch();
  const handleCompleteTask = (taskId) => () => {
    dispatch(actions.updateTask({ id: taskId, changes: { completed: !completed } }));
  };
  const handleChange = (event) => {
    setCurrentTask(event.target.value);
  };
  const handleChangeTask = (taskId) => (event) => {
    dispatch(actions.updateTask({ id: taskId, changes: { task: event.target.value } }));
  };

  return (
    <InputGroup className="mb-2" onInput={console.log('onInput')} onSelect={console.log('onSelect')}>
      <Form.Check
        onChange={handleCompleteTask(id)}
        checked={completed}
        className="input-group-text"
        aria-label="Checkbox for following text input"
      />
      <Form.Control
        aria-label="Text input with checkbox"
        disabled={completed}
        onBlur={handleChangeTask(id)}
        value={currentTask}
        onChange={handleChange}
      />
    </InputGroup>
  );
};

export default ToDoItem;
