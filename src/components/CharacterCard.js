import React from 'react';
import { Row, Col, Image, ProgressBar } from 'react-bootstrap';

function CharacterCard({ characterInfo }) {
  const powers = Object.keys(characterInfo.powerstats);
  return (
    <Row className="justify-content-center">
      <Col>
        <Image src={characterInfo.image.url} alt="Superhero or Villain" />
      </Col>
      <Col>
        <p>Name: {characterInfo.name}</p>
        <p>Secret Identity: {characterInfo.biography['full-name']}</p>
        {powers.map((power) => (
          <div style={{ padding: 10 }}>
            <ProgressBar
              now={characterInfo.powerstats[power]}
              label={`${characterInfo.powerstats[power]}`}
            />
          </div>
        ))}
      </Col>
    </Row>
  );
}

export default CharacterCard;
