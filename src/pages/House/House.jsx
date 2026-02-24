import { useState } from 'react';
import { useCharacters } from '../../hooks/useCharacters';
import CharactersGrid from '../../components/CharactersGrid/CharactersGrid';
import { hasImage } from '../../utils/filterCharacters';
import { inHouse } from '../../utils/filterCharacters';
import './House.css';
function House() {
  const { characters, loading } = useCharacters();
  const [house, setHouse] = useState('Gryffindor');

  const filtered = characters.filter(inHouse(house)).filter(hasImage);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="page">
      <h1 className="page-title"> Персонажі в певному будинку </h1>
      <div className="house-tabs">
        <button
          className={`house-tab ${house === 'Gryffindor' ? 'active' : ''}`}
          onClick={() => setHouse('Gryffindor')}
        >
          <img src="/images/gryffindor.png" alt="" />
          GRYFFINDOR
        </button>

        <button
          className={`house-tab ${house === 'Slytherin' ? 'active' : ''}`}
          onClick={() => setHouse('Slytherin')}
        >
          <img src="/images/slytherin.png" alt="" />
          SLYTHERIN
        </button>

        <button
          className={`house-tab ${house === 'Ravenclaw' ? 'active' : ''}`}
          onClick={() => setHouse('Ravenclaw')}
        >
          <img src="/images/ravenclaw.png" alt="" />
          RAVENCLAW
        </button>

        <button
          className={`house-tab ${house === 'Hufflepuff' ? 'active' : ''}`}
          onClick={() => setHouse('Hufflepuff')}
        >
          <img src="/images/hufflepuff.png" alt="" />
          HUFFLEPUFF
        </button>
      </div>
      <CharactersGrid characters={filtered} />
    </section>
  );
}

export default House;
