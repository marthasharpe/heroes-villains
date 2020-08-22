import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CharacterCard from './components/CharacterCard';
import { Container, Row } from 'react-bootstrap';

const proxy = process.env.REACT_APP_API_URL;
const key = process.env.REACT_APP_API_KEY;

function App() {
  const [characterInfo, setCharacterInfo] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log('characterInfo', characterInfo);

  const getCharacter = async (characterName) => {
    try {
      const response = await fetch(
        `${proxy}https://superheroapi.com/api/${key}/search/${characterName}`
      );
      const json = await response.json();
      if (!response.ok || json.response === 'error') {
        throw Error('Invalid name');
      }
      setCharacterInfo(json);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <h1>Heroes and Villains</h1>
      </Row>
      <SearchBar error={error} setError={setError} getCharacter={getCharacter} />
      {characterInfo && !error ? <CharacterCard characterInfo={characterInfo.results[0]} /> : null}
    </Container>
  );
}

export default App;
