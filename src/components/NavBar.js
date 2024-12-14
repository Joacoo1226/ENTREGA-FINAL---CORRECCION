import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../components/CartContext';
import { useCategories } from '../components/CategoryContext'; 
import './NavBar.css';
const NavBar = () => {
  const { getCartCount } = useCart();
  const { categories } = useCategories(); 
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="" alt="Logo" className="navbar-logo" />
      </Link>
      <div className="categories">
        {categories.length > 0 ? (
          categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} 
              className="category-link"
            >
              {category.name}
            </Link>
          ))
        ) : (
          <p>Cargando categorías...</p>
        )}
      </div>
      <div className="cart-icon">
        <Link to="/cart">
          <FaShoppingCart size={30} />
          <span className="cart-count">{getCartCount()}</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
