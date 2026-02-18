import CharacterCard from '../CharacterCard/CharacterCard';
import './CharactersGrid.css';

function CharactersGrid({ characters }) {
  return (
    <div className="characters-grid">
      {characters.map(character => (
        <CharacterCard
          key={character.id || character.name}
          character={character}
        />
      ))}
    </div>
  );
}

export default CharactersGrid;
