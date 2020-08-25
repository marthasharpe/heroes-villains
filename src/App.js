import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CharacterCard from './components/CharacterCard';
import { Container, Row } from 'react-bootstrap';
import SelectionModal from './components/SelectionModal';

const proxy = process.env.REACT_APP_API_URL;
const key = process.env.REACT_APP_API_KEY;

function App() {
  const [characterInfo, setCharacterInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [characterList, setCharacterList] = useState(null);

  console.log('characterInfo', characterInfo);

  const getCharacter = async (characterName) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${proxy}https://superheroapi.com/api/${key}/search/${characterName}`
      );
      const data = await response.json();
      if (!response.ok || data.response === 'error') {
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
      console.log('filteredData', filteredData);
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
      {characterInfo && !error ? <CharacterCard characterInfo={characterInfo} /> : null}
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
