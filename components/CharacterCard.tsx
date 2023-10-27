import React from 'react';

interface CharacterCardProps {
  character: {
    name: string;
    image: string;
  };
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
    </div>
  );
};

export default CharacterCard;
