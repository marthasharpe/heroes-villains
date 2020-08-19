import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function CharacterCard({ characterInfo }) {
  if(characterInfo) console.log('characterInfo', characterInfo)
  return (
    <Row className="justify-content-md-center">
      <h1>Character</h1>
    </Row>
  );
}

export default CharacterCard;