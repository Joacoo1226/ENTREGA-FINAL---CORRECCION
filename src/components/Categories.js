import { useEffect, useState } from 'react';
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const data = [
      { id: 1, name: 'Electrónica' },
      { id: 2, name: 'Computadoras' },
      { id: 3, name: 'Telefonía' },
    ];
    setCategories(data); 
  }, []);
  return (
    <div>
      <h2>Categorías</h2>
      {categories.length > 0 ? (
        categories.map((category) => (
          <div key={category.id}>{category.name}</div>
        ))
      ) : (
        <p>No hay categorías disponibles.</p> 
      )}
    </div>
  );
};
export default Categories;
