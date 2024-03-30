import React from "react";
import Footer from "../components/footer";
import ThemeChanger from "../components/DarkSwitch";
import { Disclosure } from "@headlessui/react";
import Logo from "../assets/logo.svg";
import Container from "../components/container";
 // import BGImg from "../assets/aboutBG.jpg";

const Navbar = () => {
    const navigation = [
      // "Ще щось можна добавити",
      "Головна сторінка",
      "Список товарів",
      "Волонтери",
      "Контакти",
    ];
    return (
        <div className="w-full">
          {/* Navbar із component, тільки видозмінений */}
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
                          <a key={index} href="#" className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                              {item}
                          </a>
                        ))}
                        <a href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">         
                          Увійти
                        </a>
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
                    <a href="/" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                        {menu}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden mr-3 space-x-4 lg:flex nav__item">
              <a href="/" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
                Увійти
              </a>
              <ThemeChanger />
            </div>
          </nav>
    </div>
);
}

const Hero = () => {
    return(
        <>
        {/* <div>
          <h1 className="flex w-full items-center justify-center text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white mb-14">
                  Трішки інформації про наш проєкт
          </h1> 
        </div> */}
        <Container className="flex flex-wrap py-20 rounded-lg bg-center bg-opacity-90 bg-cover bg-blur-xl bg-[url('/src/assets/aboutBG.jpg')]">
           <div className="flex w-full items-center justify-center"> 
            <div className="relative w-max  mb-8">
              <h1 className="animate-typing text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                Volonterio
              </h1>
            </div>
          </div>

          <div className="flex items-center w-full">
          <div className=" mb-8">
            {/* <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                Трішки інформації про наш проєкт
            </h1> */}
            <p className="lg:h-1/2  lg:w-1/2 py-20 px-20 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 animate-fade-in">
              - це унікальна онлайн платформа, яка спрощує та координує процес надання допомоги волонтерам. Наше гасло: волонтерство доступне, організоване та ефективне для кожного.
            </p>
            <p className="lg:h-1/2 py-20 px-20 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 animate-fade-in">
              Наша мета полягає в створенні сприятливого середовища для волонтерів та організацій, де вони можуть легко знаходити одне одного та співпрацювати для досягнення спільних цілей.
              Ми прагнемо забезпечити зручну та ефективну платформу, яка сприяє залученню більшої кількості людей до волонтерської діяльності та збільшенню впливу позитивних змін у нашому суспільстві.
              Пошук продукту: Волонтери можуть легко створювати запити на потрібні їм ресурси. Громадяни ж у свою чергу - бачити те, що зараз потребується
              Простота: Зручний та безкоштовний сервіс
              Підтримка армії та цивільних
              Профілі волонтерів та організацій: перевірені документи нашим адміністратором гарантують вам те, що ви не зустрінете шахраїв.
            </p>
            </div>
          </div>
        </Container>
      </>
    );
  }

const About = () => {
    return (
      <div>
        <Navbar />
        <Hero />
        <Footer />
      </div>
    );
  }

export default About;