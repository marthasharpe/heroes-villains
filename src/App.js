import React from 'react';
import SearchBar from './components/SearchBar';
import CharacterCard from './components/CharacterCard';

function App() {
  return (
    <div className="App">
      <h1>Heroes & Villains</h1>
      <SearchBar />
      <CharacterCard />
    </div>
  );
}

export default App;
