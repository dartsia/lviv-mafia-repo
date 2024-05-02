import React, { useState, useEffect } from 'react';
import Footer from '../components/footer';
import Navbar from "../components/navbar";
import axios from 'axios';

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
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Додати до кошика
        </button>
      </div>
    </div>
  );
};

const product = () =>{
    return (
        <div>
            <Navbar navigation={navigation} moreNavigation={moreNavigation} paths={paths} morePaths={morePaths} />
            <ProductDetailPage />
            <Footer />
        </div>
    );
}
export default product;


