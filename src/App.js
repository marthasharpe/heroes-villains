import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CharacterCard from './components/CharacterCard';
import { Container, Row, Button } from 'react-bootstrap';

function App() {
  const [characterInfo, setCharacterInfo] = useState();
  const [characterName, setCharacterName] = useState('supergirl');

  const getCharacter = async () => {
    try {
      const response = await fetch(
        `http://proxy-server.herokuapp.com/https://superheroapi.com/api/10104513882181015/search/${characterName}`
      );
      const json = await response.json();
      if (!response.ok) {
        throw Error(response.statusText);
      }
      console.log('response.error', response.error);
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
