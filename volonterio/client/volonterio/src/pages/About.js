import React from "react";
import Footer from "../components/footer";
import Container from "../components/container";
import Navbar from "../components/navbar";

const navigation = [
  // "Ще щось можна добавити",
  "Список товарів",
  "Додати позицію",
  "Відкриті збори",
  "Більше",
];
const moreNavigation = [
  "Волонтери",
  "Контакти",
];
const paths = [
  "/catalog",
  "/create_product",
  "/donate",
  ""
];
const morePaths = [
  "/",
  "/Contacts",
];

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
        <Navbar navigation={navigation} moreNavigation={moreNavigation} paths={paths} morePaths={morePaths} />
        <Hero />
        <MoreInformation/>
        <Footer /> 
      </div>
    );
  }

export default About;