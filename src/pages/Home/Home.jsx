import { useState } from 'react';

import Hero from '../../components/Hero/Hero';
import CategoriesSection from '../../components/CategoriesSection/CategoriesSection';
import { useCharacters } from '../../hooks/useCharacters';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import CharactersGrid from '../../components/CharactersGrid/CharactersGrid';

function Home() {
  const { characters, loading } = useCharacters();
  const [showCategories, setShowCategories] = useState(false);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Hero onShowCategories={() => setShowCategories(true)} />

      {showCategories && <CategoriesSection />}
    </>
  );
}

export default Home;
