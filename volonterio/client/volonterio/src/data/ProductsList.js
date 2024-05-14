import React, { useState, useEffect } from 'react';
import Footer from '../components/footer';
import Navbar from "../components/navbar";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Компонент для відображення окремого товару
const ProductItem = ({ product }) => {
    return (
        <div className='card'>
            <div className='card_img'>
                <img src={`https://volonterio-storage.s3.amazonaws.com/${product.file}`} alt={product.title} />
            </div>
            <div className='card_header'>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <Link to={`/product-info/${product._id}`} className='btn'>Детальніше</Link>
            </div>
        </div>
    );
};

// Компонент для відображення списку товарів
const ProductsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('There was an error!', error));
    }, []);

    return (
        <div className="main_content py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            {products.map(product => (
                <ProductItem key={product._id} product={product} />
            ))}
        </div>
    );
};

const navigation = [
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
  ""
];
const morePaths = [
  "/",
  "/Contacts",
];

const catalog_product = () =>{
    return (
        <div>
            <Navbar navigation={navigation} moreNavigation={moreNavigation} paths={paths} morePaths={morePaths} />
            <ProductsList />
            <Footer />
        </div>
    );
}
export default catalog_product

