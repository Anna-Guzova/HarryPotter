import './CategoryCard.css';
import { useNavigate } from 'react-router-dom';

function CategoryCard({ title, image, link }) {
  const navigate = useNavigate();

  return (
    <div className="category-card">
      <div
        className="category-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <button className="category-btn" onClick={() => navigate(link)}>
        {title}
      </button>
    </div>
  );
}

export default CategoryCard;
