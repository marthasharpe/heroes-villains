import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CharacterCard from './components/CharacterCard';
import { Container, Row, Col, Card } from 'react-bootstrap';
import SelectionModal from './components/SelectionModal';
import './app.css';

const proxy = process.env.REACT_APP_API_URL;
const key = process.env.REACT_APP_API_KEY;

function App() {
  const [characterInfo, setCharacterInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [characterList, setCharacterList] = useState(null);

  const getCharacter = async (characterName) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${proxy}https://superheroapi.com/api/${key}/search/${characterName}`
      );
      const data = await response.json();
      if (!response.ok) {
        throw Error('Oops! Something went wrong');
      }
      if (response.ok && data.response === 'error') {
        throw Error(`"${characterName}" not found. Try again!`);
      }
      const filteredData = data.results.filter(
        (item) => characterName.toLowerCase() === item.name.toLowerCase()
      );
      setCharacterList(filteredData);
      if (filteredData.length === 1) {
        setCharacterInfo(filteredData[0]);
      } else {
        setShow(true);
      }
    } catch (err) {
      setError(err.message);
      setCharacterInfo(null);
    }
    setIsLoading(false);
  };

  return (
    <Container style={{ padding: 30 }}>
      <Row className='intro justify-content-center'>
        <Col xs={12} sm={10} md={8} lg={6} xl={4}>
          <Card className='search' body>
            <Card.Title style={{ fontSize: 40 }}>Heroes and Villains</Card.Title>
            <SearchBar
              error={error}
              isLoading={isLoading}
              setError={setError}
              getCharacter={getCharacter}
            />
          </Card>
        </Col>
      </Row>
      <Row className='mt-3 justify-content-center'>
        {characterInfo && !error ? <CharacterCard characterInfo={characterInfo} /> : null}
      </Row>
      <SelectionModal
        show={show}
        setCharacterInfo={setCharacterInfo}
        characterList={characterList}
        setShow={setShow}
      />
    </Container>
  );
}

export default App;
