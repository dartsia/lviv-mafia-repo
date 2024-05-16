import React, { useState, useEffect } from 'react';
import Footer from '../components/footer';
import Navbar from "../components/navbar";
import axios from 'axios';
import Cart from './Cart';

const navigation = [
  // "Ще щось можна добавити",
  "Додати позицію",
  "Відкриті збори",
  "Про проєкт",
  "Більше",
];
const moreNavigation = [
  "Волонтери",
  "Контакти",
];
const paths = [
  "/create_product",
  "/donate",
  "/about",
  "/",
];
const morePaths = [
  "/",
  "/Contacts",
];

const ProductDetailPage = ({ match }) => {
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const productId = match.params.id;

  useEffect(() => {
    axios.get(`http://localhost:3001/products/${productId}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Помилка при отриманні продукту:', error);
      });
  }, [productId]);

  const addToCart = () => {
    if (product) {
      const itemInCart = cartItems.find(item => item.id === product.id);
      if (itemInCart) {
        const updatedCartItems = cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCartItems);
      } else {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
      }
    }
  };

  if (!product) {
    return <div>Продукт не знайдено</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
        <div className="flex justify-between mb-4">
          <span className="text-gray-600">Ціна:</span>
          <span className="font-bold text-gray-800">{product.price} грн</span>
        </div>
        <img src={product.image} alt={product.title} className="mb-4" />
        <p className="text-gray-700 mb-4">{product.description}</p>
        <button onClick={addToCart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Додати до кошика
</button>
      </div>
      {cartItems.length > 0 && <Cart cartItems={cartItems} setCartItems={setCartItems} />}
    </div>
  );
};

const Product = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Navbar navigation={navigation} moreNavigation={moreNavigation} paths={paths} morePaths={morePaths} />
      <ProductDetailPage addToCart={() => setOpen(true)} />
      {/* Позначка коментаря: Додали компонент Cart та передали необхідні пропси */}
      <Cart cartItems={cartItems} setCartItems={setCartItems} isOpen={isOpen} setOpen={setOpen} />
      <Footer />
    </div>
  );
};

export default Product;