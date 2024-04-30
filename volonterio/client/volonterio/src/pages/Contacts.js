import React from 'react';
import photo3 from '../assets/photo3.jpg';
import Footer from '../components/footer';
import ThemeChanger from "../components/DarkSwitch";
import { Disclosure } from "@headlessui/react";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const navigation = [
    "Головна сторінка",
    "Список товарів",
    "Додати новий товар",
    "Відкриті збори",
    "Волонтери",
    "Про проєкт"
  ];
  const paths = [
    "/",
    "/create_product",
    "/donate",
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
                      <a key={index} href={paths[index]} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
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

const Contact = ({ name, position }) => (
  <div className="p-4 border-b border-gray-200">
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-sm text-">{position}</p>
  </div>
);

const Team = () => {
  const team = [
    {
      name: 'Юлія Нецинська',
      position: 'Frontend Developer',  
    },
    {
      name: 'Юра Яремко',
      position: 'Frontend Developer',   
    },
    {
      name: 'Макс Сущук',
      position: 'Backend Developer',  
    },
    {
      name: 'Дарія Ничиснюк',
      position: 'Database Administrator, Backend Developer', 
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ваше повідомлення відправлено:', e.target.elements.name.value, e.target.elements.email.value, e.target.elements.message.value);
    e.target.reset();
  };

  return (
    <div className="p-40 w-full h-screen overflow-y-auto relative">
      <img
        src={photo3}
        alt="photo3"
        className="absolute inset-0 w-screen h-screen object-cover object-center z-0"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="max-w-3xl mx-auto p-4 bg-gray-800 bg-opacity-75 rounded text-white ">
          <h2 className="text-xl font-semibold mb-4 text-center">Наша команда</h2>
          {team.map((contact, index) => (
            <Contact key={index} {...contact} />
          ))}
          <h2 className="text-xl font-semibold mb-4 text-center">Робочий графік:</h2>
          <p className="mt-2 text-center">Наша команда доступна для зв'язку з понеділка по п'ятницю з 9:00 до 18:00.</p>
          <p className="mt-8 text-center mb-4">Виникли проблеми? Хочете задати запитання або ж запропонувати покращення? Ви можете заповнити форму нижче і наша команда з'явяжеться з Вами!</p>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="text-white">Ім'я:</label>
              <input type="text" id="name" name="name" className="bg-gray-200 rounded-md p-2 text-black" required />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="text-white">Електронна пошта:</label>
              <input type="email" id="email" name="email" className="bg-gray-200 rounded-md p-2 text-black" required />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="message" className="text-white">Повідомлення:</label>
              <textarea id="message" name="message" rows="4" className="bg-gray-200 rounded-md p-2 text-black" required></textarea>
            </div>
            <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md">Відправити</button>
          </form>
        </div>
      </div>
    </div>
  );
}

const Contacts = () =>{
  return (
      <div>
          <Navbar />
          <Team />
          <Footer />
      </div>
  );
}

export default Contacts;
