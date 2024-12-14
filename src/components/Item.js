import { Link } from 'react-router-dom';

const Item = ({ id, name, price, image }) => {
  return (
    <div className="item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <Link to={`/item/${id}`}>Ver más detalles</Link>
    </div>
  );
};

export default Item;
