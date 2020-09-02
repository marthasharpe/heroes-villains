import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CharacterCard from './components/CharacterCard';
import { Container, Row } from 'react-bootstrap';
import SelectionModal from './components/SelectionModal';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import './app.css';

const proxy = process.env.REACT_APP_API_URL;
const key = 100964191747940;

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
        `https://superheroapi.com/api/${key}/search/${characterName}`
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
    <div className='parent'>
      <Container fluid>
        <div className='card'>
          <Row>
            <h1 className='title'>Heroes and Villains</h1>
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
        </div>
      </Container>
    </div>
  );
}

export default App;


