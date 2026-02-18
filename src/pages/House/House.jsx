import { useState } from 'react';
import { useCharacters } from '../../hooks/useCharacters';
import CharactersGrid from '../../components/CharactersGrid/CharactersGrid';

function House() {
  const { characters, loading } = useCharacters();
  const [house, setHouse] = useState('Gryffindor');

  const filtered = characters.filter(character => character.house === house);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="page">
      <h1 className="page-title"> Персонажі в певному будинку </h1>
      <div className="house-tabs">
        <button onClick={() => setHouse('Gryffindor')}>Gryffindor</button>

        <button onClick={() => setHouse('Slytherin')}>Slytherin</button>

        <button onClick={() => setHouse('Ravenclaw')}>Ravenclaw</button>

        <button onClick={() => setHouse('Hufflepuff')}>Hufflepuff</button>
      </div>
      <CharactersGrid characters={filtered} />
    </section>
  );
}

export default House;
