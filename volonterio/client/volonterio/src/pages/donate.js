import React from "react";
import Footer from "../components/footer";
import '../index.css';
import photo1 from '../assets/test_carousel_3.jpeg';
import photo2 from '../assets/test_carousel_2.jpg';
import photo3 from '../assets/test_carousel.jpeg';
import TEST4 from '../assets/aboutBG.jpg';
import { Carousel } from 'react-responsive-3d-carousel' 
import Navbar from "../components/navbar";

  const navigation = [
    // "Ще щось можна добавити",
    "Cписок товарів",
    "Додати позицію",
    "Про проєкт",
    "Більше",
  ];
  const moreNavigation = [
    "Волонтери",
    "Контакти",
  ];
  const paths = [
    "/catalog",
    "/create_product",
    "/about",
    ""
  ];
  const morePaths = [
    "/",
    "/Contacts",
  ];
const urls = [
  'https://prytulafoundation.org', // URL для першого слайда
  'https://savelife.in.ua', // URL для другого слайда
  'https://u24.gov.ua',     // URL для третього слайда
  //для інших
];

const DonatePage = () => {
  return (
    <div>
      <Navbar navigation={navigation} moreNavigation={moreNavigation} paths={paths} morePaths={morePaths} />
      <div>
        <h1 className="flex items-center justify-center text-6xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white"> Сторінка активних зборів</h1>
      </div>
      <Carousel  width='1100px' height='700px' showStatus ={false} interval={6000} arrowsDefaultColor='gray' arrowsHoveredColor='purple' onClickCenteredItem={(index) => {
          window.open(urls[index], '_blank');
         }}>
        <img src= {photo1} alt="example-image-1" />
        <img src= {photo2} alt="example-image-1" />
        <img src= {photo3} alt="example-image-2" />
        <img src= {TEST4} alt="example-image-2" />

        <img src= {photo1} alt="example-image-1" />
        <img src= {photo2} alt="example-image-1" />
        <img src= {photo3} alt="example-image-2" />
        <img src= {TEST4} alt="example-image-2" />
    </Carousel>
      <Footer />
    </div>
  );
}

export default DonatePage;