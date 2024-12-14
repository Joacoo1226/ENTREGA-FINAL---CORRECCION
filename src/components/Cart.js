import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom'; 
import './Cart.css';  
const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();   
  const total = cart.reduce((acc, product) => acc + product.price, 0); 
  const handlePurchase = () => {
    navigate('/checkout');  
  };
  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          <ul className="cart-items">
            {cart.map((product) => (
              <li key={product.id} className="cart-item">
                <div className="cart-item-details">
                  <h3>{product.name}</h3>
                  <p>Precio: ${product.price}</p>
                </div>
                <button
                  className="remove-item"
                  onClick={() => removeFromCart(product.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total: ${total}</h3>
          </div>
          <button className="purchase-button" onClick={handlePurchase}>
            Realizar compra
          </button>
        </div>
      )}
    </div>
  );
};
export default Cart;
