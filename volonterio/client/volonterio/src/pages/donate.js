import React from "react";
import Footer from "../components/footer";
import '../index.css';
import photo1 from '../assets/test_carousel_3.jpeg';
import photo2 from '../assets/test_carousel_2.jpg';
import photo3 from '../assets/test_carousel.jpeg';
import TEST4 from '../assets/aboutBG.jpg';
import ThemeChanger from "../components/DarkSwitch";
import { Disclosure } from "@headlessui/react";
import Logo from "../assets/logo.svg";
import { Carousel } from 'react-responsive-3d-carousel' 

const Navbar = () => {
  const navigation = [
    // "Ще щось можна добавити",
    "Список товарів",
    "Додати новий товар",
    "Волонтери",
    "Про проєкт",
    "Контакти"
  ];
  const paths = [
    "/",
    "/create_product",
    "/",
    "/about",
    "/",
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <a href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      <img
                        src={Logo}
                        alt="N"
                        width="32"
                        height="32"
                        className="w-8"
                      />
                    </span>
                    <span>Львівська Мафія</span>
                  </span>
                </a>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <a key={index} href="/about" className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                          {item}
                      </a>
                    ))}
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <a href={paths[index]} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu}
                </a>
              </li>
            ))}
            
          </ul>
        </div>
        <div className="hidden mr-3 space-x-4 lg:flex nav__item pl-16">
          <a href="/signIn" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
            Увійти
          </a>
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}

const urls = [
  'https://prytulafoundation.org', // URL для першого слайда
  'https://savelife.in.ua', // URL для другого слайда
  'https://u24.gov.ua',     // URL для третього слайда
  //для інших
];

const DonatePage = () => {
  return (
    <div>
      <Navbar />
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