import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import './ItemListContainer.css';
const mockProducts = [
  { id: 1, name: 'Iphone 15', category: 'Telefonía', price: 500, image: 'images/iph15.jpg' },
  { id: 2, name: 'Procesador Ryzen 7', category: 'Computadoras', price: 300, image: 'images/proce.jpg' },
  { id: 3, name: 'Placa RTX 3060', category: 'Electrónica', price: 500, image: 'images/placa.jpg' },
];
const ItemListContainer = ({ title }) => {
  const { id: categoryId } = useParams(); 
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  useEffect(() => {
    const filteredProducts = categoryId
      ? mockProducts.filter(product => product.category.toLowerCase() === categoryId.toLowerCase())
      : mockProducts;
    setProducts(filteredProducts);
  }, [categoryId]);
  return (
    <div className="product-list">
      <h2>{title}</h2>
      {products.length === 0 ? (
        <p>No hay productos en esta categoría.</p>
      ) : (
        products.map(product => (
          <div key={product.id} className="product-item">
            <Link to={`/item/${product.id}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button 
                className="add-to-cart"
                onClick={() => addToCart(product)}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default ItemListContainer;
