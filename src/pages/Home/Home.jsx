import { useCharacters } from '../../hooks/useCharacters';
import CharacterCard from '../../components/CharacterCard/CharacterCard';

function Home() {
  const { characters, loading } = useCharacters();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Characters</h1>
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default Home;
