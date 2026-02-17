function CharacterCard({ character }) {
  return (
    <div>
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>{character.house}</p>
    </div>
  );
}

export default CharacterCard;
