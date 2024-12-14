
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const mockProducts = [
  { id: 1, name: 'IPHONE 15', category: 'celulares', price: 80, description: 'El iPhone 15 cuenta con memoria RAM de alta velocidad, asegurando un rendimiento fluido en aplicaciones exigentes.', image: '/images/iph15.jpg' },
  { id: 2, name: 'Procesador Ryzen 9', category: 'procesadores', price: 300, description: 'Procesador potente para gaming y trabajo, ideal para tareas multitarea.', image: '/images/proce.jpg' },
  { id: 3, name: 'Placa RTX 3060ti', category: 'placas', price: 500, description: 'La NVIDIA GeForce RTX 3060 Ti es una tarjeta gráfica con 8 GB de memoria GDDR6, excelente para gaming de alto rendimiento.', image: '/images/placa.jpg' },
];
const ItemDetailContainer = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const foundProduct = mockProducts.find(p => p.id === parseInt(id)); 
    if (foundProduct) {
      setProduct(foundProduct);
      setError(null);
    } else {
      setError('Producto no encontrado.');
    }
    setLoading(false);
  }, [id]);
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="item-detail">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Precio: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};
export default ItemDetailContainer;
