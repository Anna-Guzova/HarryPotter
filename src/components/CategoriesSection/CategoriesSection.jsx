import './CategoriesSection.css';

function CategoriesSection() {
  return (
    <section className="categories">
      <div className="categories-container">
        <div className="category-card">
          <p>Студенти Гогвардсу</p>
        </div>
        <div className="category-card">
          <p>Співробітники Гогвартсу</p>
        </div>

        <div className="category-card">
          <p>Персонажі в певному будинку</p>
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
