import React from 'react';
import { Row } from 'react-bootstrap';

function CharacterCard({ characterInfo }) {
  if (characterInfo) console.log('characterInfo', characterInfo);
  return (
    <Row className="justify-content-center">
      <h1>Character</h1>
    </Row>
  );
}

export default CharacterCard;
