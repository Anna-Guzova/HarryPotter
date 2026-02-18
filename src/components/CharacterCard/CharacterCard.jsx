import './CharacterCard.css';

function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img
        src={character.image || '/images/no-image.png'}
        alt={character.name}
        className="character-img"
      />
      <div className="character-overlay">
        <h3>{character.name}</h3>
        {character.actor && <p>{character.actor}</p>}
        {character.house && <span>{character.house}</span>}
        <button className="more-btn">Більше інформації →</button>
      </div>
    </div>
  );
}

export default CharacterCard;
