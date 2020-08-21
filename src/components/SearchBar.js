import React, { useState } from 'react';
import { Row, Button, Form } from 'react-bootstrap';

function SearchBar({ setCharacterName, getCharacter }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCharacterName(input);
    getCharacter();
    setInput('');
  };

  return (
    <Row className="justify-content-center">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Search for a hero or villain!</Form.Label>
          <Form.Control
            placeholder="e.g. Superman"
            value={input}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            This will be an error message.
          </Form.Text>
        </Form.Group>
        <Button type="submit">Get Character</Button>
      </Form>
    </Row>
  );
}

export default SearchBar;
