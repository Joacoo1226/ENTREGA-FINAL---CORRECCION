// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './components/CartContext';
import { CategoryProvider } from './components/CategoryContext'; 
import Cart from './components/Cart';
import Checkout from './components/Checkout';
const App = () => {
  return (
    <CartProvider>
      <CategoryProvider> 
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer title="Catálogo de Productos" />} />
            <Route path="/category/:id" element={<ItemListContainer title="Catálogo de Productos" />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} /> 
          </Routes>
        </Router>
      </CategoryProvider>
    </CartProvider>
  );
};
export default App;
