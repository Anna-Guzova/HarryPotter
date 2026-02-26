import { useState } from 'react';
import { useRef } from 'react';

import Hero from '../../components/Hero/Hero';
import CategoriesSection from '../../components/CategoriesSection/CategoriesSection';
import { useCharacters } from '../../hooks/useCharacters';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import CharactersGrid from '../../components/CharactersGrid/CharactersGrid';
import BackButton from '../../components/Button/BackButton';

function Home() {
  const { characters, loading } = useCharacters();
  const [showCategories, setShowCategories] = useState(false);
  const sectionRef = useRef(null);

  const handleShowCategories = () => {
    setShowCategories(true);

    setTimeout(() => {
      sectionRef.current?.scrollIntoView({
        behavior: 'smooth',
      });
    }, 0);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Hero onShowCategories={handleShowCategories} />

      {showCategories && (
        <div ref={sectionRef}>
          <CategoriesSection />
        </div>
      )}
    </>
  );
}

export default Home;
