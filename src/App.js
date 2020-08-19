import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CharacterCard from './components/CharacterCard';
import { Container, Row, Button } from 'react-bootstrap';

const proxy = process.env.REACT_APP_API_URL;
const key = process.env.REACT_APP_API_KEY;

function App() {
  const [characterInfo, setCharacterInfo] = useState();
  const [characterName, setCharacterName] = useState('wonder_woman');

  const getCharacter = async () => {
    try {
      const response = await fetch(
        `${proxy}https://superheroapi.com/api/${key}/search/${characterName}`
      );
      const json = await response.json();
      if (!response.ok) {
        throw Error(response.statusText);
      }
      setCharacterInfo(json);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <h1>Heroes and Villains</h1>
      </Row>
      <Button onClick={() => getCharacter()}>Get Character</Button>
      <SearchBar />
      {characterInfo ? (
        <CharacterCard characterInfo={characterInfo.results[0]} />
      ) : null}
    </Container>
  );
}

export default App;
