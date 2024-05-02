import React from "react";
import Footer from "../components/footer";
import ThemeChanger from "../components/DarkSwitch";
import { Disclosure } from "@headlessui/react";
import Logo from "../assets/logo.svg";
import Container from "../components/container";
import bgImage from '../assets/aboutBG.jpg';


const Navbar = () => {
  const navigation = [
    // "Ще щось можна добавити",
    "Список товарів",
    "Додати новий товар",
    "Відкриті збори",
    "Волонтери",
    "Контакти"
  ];
  const paths = [
    "/catalog",
    "/create_product",
    "/donate",
    "/",
    "/",
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
              <a href="/signIn" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
                Увійти
              </a>
              <ThemeChanger />
            </div>
          </nav>
    </div>
);
}


// const Hero = () => {
//     return(
//         <>
//         <Container className="flex w-full h-full flex-wrap py-28 rounded-lg bg-center bg-opacity-90 bg-cover bg-blur-xl bg-[url('/src/assets/aboutBG.jpg')] mb-8">
//            <div className=" flex w-full items-center justify-center"> 
//             <div className="lg:w-1/2 relative w-max text-right">
//               <h1 className="mb-8 animate-typing text-4xl font-bold leading-snug tracking-tight text-indigo-600 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-indigo-700 text-right">
//                 Volonterio
//               </h1>
//             </div>
//           </div>

//           <div className="flex items-center w-full mt-8">
//             <div className=" lg:w-1/2 ml-auto" >
//               <p className=" mb-20 py-10 px-10 text-lg leading-normal lg:text-xl xl:text-2xl text-white animate-fade-in bg-black bg-opacity-50 rounded-lg mr-10">
//                 - це унікальна онлайн платформа, яка спрощує та координує процес надання допомоги волонтерам. 
//               </p>
//               <p className=" py-10 px-10 text-lg leading-normal lg:text-xl xl:text-2xl text-white animate-fade-in bg-black bg-opacity-50 rounded-lg mr-10">
//                 Наше гасло: волонтерство доступне, організоване та ефективне для кожного.
//               </p>
//             </div>
//           </div>
//         </Container>
//       </>
//     );
//   }

const Hero = () => {
  return(
      <>
      <Container className="flex w-full h-full flex-wrap py-28 rounded-lg bg-center bg-opacity-90 bg-cover bg-blur-xl bg-[url('/src/assets/aboutBG.jpg')] mb-8">
        <div className="flex w-full items-center justify-center"> 
          <div className="lg:w-1/2 w-max text-center ml-auto">
            <h1 className="mb-8 text-4xl font-bold leading-snug tracking-tight text-indigo-600 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-indigo-700">
              Volonterio
            </h1>
          </div>
        </div>

        <div className="flex items-center w-full mt-8">
          <div className="lg:w-1/2 ml-auto" >
            <p className="mb-20 py-10 px-10 text-lg leading-normal lg:text-xl xl:text-2xl text-white animate-fade-in bg-black bg-opacity-50 rounded-lg mr-10">
              - це унікальна онлайн платформа, яка спрощує та координує процес надання допомоги волонтерам. 
            </p>
            <p className="py-10 px-10 text-lg leading-normal lg:text-xl xl:text-2xl text-white animate-fade-in bg-black bg-opacity-50 rounded-lg mr-10">
              Наше гасло: волонтерство доступне, організоване та ефективне для кожного.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}


  
const MoreInformation = () => {
  return (
        <>
          <Container className="flex flex-wrap mt-8 mb-8">
            <div className="flex items-center w-full lg:w-1/2 ">
              <div className="max-w-2xl mb-8">
                <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                  Мета
                </h1>
                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                  полягає в створенні сприятливого середовища для волонтерів та організацій, де вони можуть легко знаходити одне одного та співпрацювати для досягнення спільних цілей.
                </p>
              </div>
            </div>
            <div className= "flex items-center justify-center w-full lg:w-1/2">
              <div className= "py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                <h1 className= "text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white">
                  Ми прагнемо
                </h1>
                <p className="mt-5 mb-8">
                  забезпечити зручну та ефективну платформу, яка сприяє залученню більшої кількості людей до волонтерської діяльності та збільшенню впливу позитивних змін у нашому суспільстві.
                </p>
                <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white">
                  Ключові задачі
                </h1>
                <p>
                  Пошук продукту: волонтери можуть легко створювати запити на потрібні їм ресурси. Громадяни ж у свою чергу - бачити те, що зараз потребується <br/>
                  Простота: зручний та безкоштовний сервіс<br/>
                  Підтримка армії та цивільних<br/>
                  Профілі волонтерів та організацій: перевірені документи нашим адміністратором гарантують вам те, що ви не зустрінете шахраїв.
                </p>
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
        </>
      );
}

const About = () => {
    return (
      <div>
        <Navbar />
        <Hero />
        <MoreInformation/>
        <Footer /> 
      </div>
    );
  }

export default About;