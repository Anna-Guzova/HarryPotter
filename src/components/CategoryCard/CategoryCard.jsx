import './CategoryCard.css';

function CategoryCard({ title, image }) {
  return (
    <div className="category-card">
      <div
        className="category-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <button className="category-btn">{title}</button>
    </div>
  );
}

export default CategoryCard;
