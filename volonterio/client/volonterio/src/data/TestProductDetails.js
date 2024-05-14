import {React, useState, useEffect} from 'react';
import Footer from '../components/footer';
import Navbar from "../components/navbar";
import { useParams } from 'react-router-dom';

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

// Компонент для відображення деталей окремого товару
const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`/product-info/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('There was an error!', error));
    }, [id]);

    return (
        <div>
            <Navbar navigation={navigation} moreNavigation={moreNavigation} paths={paths} morePaths={morePaths} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img src={`https://volonterio-storage.s3.amazonaws.com/${product.file}`} alt={product.title} />
            <Footer />
        </div>
    );
};


export default ProductDetails;