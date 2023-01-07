import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap/esm';

const Header = () => (
  <header className="w-100 d-flex flex-column align-items-center">
    <h1 className="display-1 text-primary">todos</h1>
    <FloatingLabel
      controlId="floatingInput"
      label="What needs to be done?"
      className="mb-3 w-50 "
    >
      <Form.Control type="email" placeholder="name@example.com" />
    </FloatingLabel>
  </header>
);

export default Header;
