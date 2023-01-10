import React, { useEffect, useRef } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap/esm';
import { useDispatch } from 'react-redux';
import _uniqueId from 'lodash/uniqueId';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { actions } from '../slices/tasksSlice';

const Header = () => {
  const dispatch = useDispatch();

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (value, { resetForm }) => {
    const task = value.body;

    dispatch(actions.addTask({ id: _uniqueId(), task, completed: false }));
    resetForm();
  };

  const schema = yup.object().shape({
    body: yup.string().min(3, 'Must be at least 3 characters'),
  });

  const formik = useFormik({ onSubmit: handleSubmit, validationSchema: schema, initialValues: { body: '' } });

  return (
    <header className="w-100 d-flex flex-column align-items-center">
      <h1 className="display-1 text-primary">todos</h1>
      <Form className="w-50" onSubmit={formik.handleSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="What needs to be done?"
          className="mb-3 "
        >
          <Form.Control
            type="text"
            aria-label="new task"
            ref={inputRef}
            placeholder="Drink some tea"
            isInvalid={formik.errors.body}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.body}
            name="body"
            required
          />
          <Form.Control.Feedback type="invalid">{formik.errors.body}</Form.Control.Feedback>
        </FloatingLabel>
      </Form>
    </header>
  );
};

export default Header;
