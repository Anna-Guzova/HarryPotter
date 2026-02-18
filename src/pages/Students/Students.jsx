import { useCharacters } from '../../hooks/useCharacters';
import CharactersGrid from '../../components/CharactersGrid/CharactersGrid';
import './Students.css';
function Students() {
  const { characters, loading } = useCharacters();

  const students = characters.filter(
    character => character.hogwartsStudent === true,
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div className="page">
      <div className="page-container">
        <h1 className="page-title">СТУДЕНТИ ГОГВОРТСУ</h1>

        <CharactersGrid characters={students} />
      </div>
    </div>
  );
}

export default Students;
