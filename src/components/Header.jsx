import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap/esm';
import { useDispatch } from 'react-redux';
import _uniqueId from 'lodash/uniqueId';
import { actions } from '../slices/tasksSlice';

const Header = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log('form', form);
    console.log('event', event);
    console.log('event.target[0].value', event.target[0].value);
    const task = event.target[0].value;
    // dispatch(actions.addTask({ task: event.target[0].value, completed: false }));
    dispatch(actions.addTask({ id: _uniqueId(), task, completed: false }));
    form.reset();
  };

  return (
    <header className="w-100 d-flex flex-column align-items-center">
      <h1 className="display-1 text-primary">todos</h1>
      <Form className="w-50" onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="What needs to be done?"
          className="mb-3 "
        >
          <Form.Control type="text" placeholder="name@example.com" />
        </FloatingLabel>
      </Form>
    </header>
  );
};

export default Header;
