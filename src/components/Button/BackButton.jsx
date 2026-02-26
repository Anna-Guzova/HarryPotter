import { useNavigate } from 'react-router-dom';
import './BackButton.css';

function BackButton() {
  const navigate = useNavigate();

  return (
    <button className="magic-btn" type="button" onClick={() => navigate(-1)}>
      ← Повернутись назад
    </button>
  );
}

export default BackButton;
