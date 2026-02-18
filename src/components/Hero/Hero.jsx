import './Hero.css';
import hogwartsImg from '../../assets/images/hogwarts.jpg';

function Hero({ onShowCategories }) {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${hogwartsImg})` }}
    >
      <div className="hero-overlay">
        <h1 className="hero-title">
          Ласкаво просимо <br /> у світ Гаррі Поттера
        </h1>

        <button className="hero-btn" onClick={onShowCategories}>
          Показати всіх персонажів
        </button>
      </div>
    </section>
  );
}
export default Hero;
