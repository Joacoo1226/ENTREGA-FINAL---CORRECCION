import React from 'react';
import { useParams } from 'react-router-dom';
const mockProducts = [
  { id: 1, name: 'Iphone 15', category: 'celulares', price: 500, image: 'images/iph15.jpg', description: 'Smartphone de última generación.' },
  { id: 2, name: 'Procesador Ryzen 7', category: 'procesadores', price: 300, image: 'images/proce.jpg', description: 'Procesador de alto rendimiento.' },
  { id: 3, name: 'Placa RTX 3060', category: 'placas', price: 500, image: 'images/placa.jpg', description: 'Tarjeta gráfica potente para juegos.' },
];
const ProductDetail = () => {
  const { id } = useParams();
  const product = mockProducts.find(p => p.id === parseInt(id));
  if (!product) return <p>Producto no encontrado.</p>;
  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
    </div>
  );
};
export default ProductDetail;
