import { useCharacters } from '../../hooks/useCharacters';
import CharactersGrid from '../../components/CharactersGrid/CharactersGrid';

function Staff() {
  const { characters, loading } = useCharacters();

  const staff = characters.filter(
    character => character.hogwartsStaff === true,
  );

  if (loading) return <p>Loading...</p>;
  return (
    <section className="page">
      <h1 className="page-title"> Співробітники Гогвардсу</h1>
    </section>
  );
}

export default Staff;
