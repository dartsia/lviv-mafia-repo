import {React, useState, useEffect} from 'react';
import Container from '../components/container';
import Footer from '../components/footer';
import Navbar from "../components/navbar";
import { useParams } from 'react-router-dom';
import Cart from '../pages/Cart';
import defaultImage from '../assets/not_found.jpg'

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
    const [cartItems, setCartItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`/product-info/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('There was an error!', error));
    }, [id]);

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

    return (
        <div>
            <Navbar navigation={navigation} moreNavigation={moreNavigation} paths={paths} morePaths={morePaths} />
            <Container className="flex flex-wrap ">
                <div className="flex items-center w-full lg:w-1/2">
                  <div className="max-w-2xl mb-8">
                    <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                      {product.title}
                    </h1>
                    <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                      {product.description}
                    </p>

                    <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                        <a
                          href="/catalog"
                          target="_blank"
                          rel="noopener"
                          className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md cursor-pointer">
                          Повернутись назад
                        </a>
                        <button
                          onClick= {addToCart}
                          target="_blank"
                          rel="noopener"
                          className="flex px-8 py-4 text-lg font-medium text-center text-white bg-lime-600 rounded-md cursor-pointer">
                          Додати до кошика
                        </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-full lg:w-1/2">
                  <div className="">
                    <img
                      src={product.file ? `${product.file}` : defaultImage}
                      width="516"
                      height="517"
                      className={"object-cover"}
                      alt="Product Test Information"
                    />
                  </div>
                </div>
              </Container>
              <Container>
                <div className="flex flex-col justify-center">
                  <div className="text-xl text-center text-gray-700 dark:text-white">
                    Сайт знаходиться у розробці
                  </div>
                </div>
              </Container>
            <Footer />
        </div>
    );
};


export default ProductDetails;