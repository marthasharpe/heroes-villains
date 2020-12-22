import React from 'react';
import { Card, Row, Col, ProgressBar } from 'react-bootstrap';
import './characterCard.css';

function CharacterCard({ characterInfo }) {
  const powers = Object.keys(characterInfo.powerstats);
  return (
    <Card body className='character-card'>
      <Row className='mb-4 justify-content-center'>
        <Col>
          <Card.Title style={{ fontSize: 30 }}>{characterInfo.name}</Card.Title>
          <Card.Subtitle style={{ fontSize: 20 }}>
            {characterInfo.biography['full-name']}
          </Card.Subtitle>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Card.Img
            className='card-image'
            src={characterInfo.image.url}
            alt='Superhero or Villain'
          />
        </Col>
        <Col>
          <p>Power Stats:</p>
          {powers.map((quality) => (
            <Row key={quality}>
              <Col>
                <p>{quality}</p>
              </Col>
              <Col md={8}>
                <ProgressBar
                  now={characterInfo.powerstats[quality]}
                  label={`${characterInfo.powerstats[quality]}`}
                />
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Card>
  );
}

export default CharacterCard;
