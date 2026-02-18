import './CategoriesSection.css';

import CategoryCard from '../CategoryCard/CategoryCard';

import studentsImg from '../../assets/images/students.jpg';
import staffImg from '../../assets/images/staff.jpg';
import houseImg from '../../assets/images/house.jpg';

function CategoriesSection() {
  return (
    <section className="categories">
      <div className="categories-container">
        <CategoryCard title="Студенти Гогвардсу" image={studentsImg} />
        <CategoryCard title="Співробітники Гогвардсу" image={staffImg} />
        <CategoryCard title="Персонажі в певному будинку" image={houseImg} />
      </div>
    </section>
  );
}

export default CategoriesSection;
