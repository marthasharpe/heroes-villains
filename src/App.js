import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CharacterCard from './components/CharacterCard';
import { Container } from 'react-bootstrap';


function App() {

  const [ characterInfo, setCharacterInfo ] = useState();
  const [ characterName, setCharacterName ] = useState('supergirl')

  useEffect(() => {
    fetch(`https://superheroapi.com/api/10104513882181015/search/${characterName}`)
      .then(response => response.json())
      .then(data => console.log(data));
  }, [])

  return (
    <Container>
      <h1>Heroes & Villains</h1>
      <SearchBar />
      <CharacterCard />
    </Container>
  );
}

export default App;
