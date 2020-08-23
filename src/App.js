import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CharacterCard from './components/CharacterCard';
import { Container, Row } from 'react-bootstrap';

const proxy = process.env.REACT_APP_API_URL;
const key = process.env.REACT_APP_API_KEY;

function App() {
  const [characterInfo, setCharacterInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log('characterInfo', characterInfo);

  const getCharacter = async (characterName) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${proxy}https://superheroapi.com/api/${key}/search/${characterName}`
      );
      const json = await response.json();
      if (!response.ok || json.response === 'error') {
        throw Error(`"${characterName}" not found. Try again!`);
      }
      setCharacterInfo(json);
    } catch (err) {
      setError(err.message);
      setCharacterInfo(null);
    }
    setIsLoading(false);
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <h1>Heroes and Villains</h1>
      </Row>
      <SearchBar
        error={error}
        isLoading={isLoading}
        setError={setError}
        getCharacter={getCharacter}
      />
      {characterInfo && !error ? <CharacterCard characterInfo={characterInfo.results[0]} /> : null}
    </Container>
  );
}

export default App;
