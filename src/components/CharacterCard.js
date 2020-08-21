import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

function CharacterCard({ characterInfo }) {
  console.log('characterInfo', characterInfo);
  return (
    <Row className="justify-content-center">
      <Col>
        <Image src={characterInfo.image.url} alt="Superhero or Villain" />
      </Col>
      <Col>
        <p>Name: {characterInfo.name}</p>
        <p>Secret Identity: {characterInfo.biography['full-name']}</p>
      </Col>
    </Row>
  );
}

export default CharacterCard;
