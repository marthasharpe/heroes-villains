import React, { useState } from 'react';
import { Row, Button, Form } from 'react-bootstrap';

function SearchBar({ getCharacter, error, setError }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setError(null);
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getCharacter(input);
    setInput('');
  };

  return (
    <Row className="justify-content-center">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Search for a hero or villain!</Form.Label>
          <Form.Control placeholder="e.g. Superman" value={input} onChange={handleChange} />
          {error ? <Form.Text className="text-muted">{error}</Form.Text> : null}
        </Form.Group>
        <Button type="submit">Get Character</Button>
      </Form>
    </Row>
  );
}

export default SearchBar;
