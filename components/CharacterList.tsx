import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard  character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
