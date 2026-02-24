import { useCharacters } from '../../hooks/useCharacters';
import CharactersGrid from '../../components/CharactersGrid/CharactersGrid';
import { hasImage } from '../../utils/filterCharacters';
function Staff() {
  const { characters, loading } = useCharacters();

  const staff = characters.filter(c => c.hogwartsStaff).filter(hasImage);

  if (loading) return <p>Loading...</p>;
  return (
    <div className="page">
      <div className="page-container">
        <h1 className="page-title">СПІВРОБІТНИКИ ГОГВОРТСУ</h1>
        <CharactersGrid characters={staff} />
      </div>
    </div>
  );
}

export default Staff;
