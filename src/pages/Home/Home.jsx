import Hero from '../../components/Hero/Hero';
import { useCharacters } from '../../hooks/useCharacters';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import CharactersGrid from '../../components/CharactersGrid/CharactersGrid';

function Home() {
  const { characters, loading } = useCharacters();

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Hero />

      {loading ? <p>Loading...</p> : <CharactersGrid characters={characters} />}
    </>
  );
}

export default Home;
