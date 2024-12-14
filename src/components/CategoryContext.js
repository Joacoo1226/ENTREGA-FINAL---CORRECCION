import { createContext, useContext, useState, useEffect } from 'react';
const CategoryContext = createContext();
export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const staticCategories = [
      {
        id: 1,
        name: 'Electrónica',
        products: [
          { id: 1, name: 'Procesador', description: 'Procesador Intel i9', price: 500 },
          { id: 2, name: 'Tarjeta Gráfica', description: 'NVIDIA RTX 3080', price: 700 },
        ]
      },
      {
        id: 2,
        name: 'Computadoras',
        products: [
          { id: 3, name: 'Laptop HP', description: 'Laptop HP Pavilion', price: 800 },
          { id: 4, name: 'PC Gamer', description: 'PC Gamer con RTX 3070', price: 1200 },
        ]
      },
      {
        id: 3,
        name: 'Telefonía',
        products: [
          { id: 5, name: 'iPhone 13', description: 'iPhone 13 Pro', price: 1000 },
          { id: 6, name: 'Samsung Galaxy S21', description: 'Samsung Galaxy S21 Ultra', price: 950 },
        ]
      },
    ];
    setCategories(staticCategories);
  }, []);
  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};
export const useCategories = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategories debe ser usado dentro de un CategoryProvider');
  }
  return context;
};
