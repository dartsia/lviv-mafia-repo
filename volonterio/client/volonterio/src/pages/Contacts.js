import React from 'react';
import Navbar from "../components/navbar";
import photo3 from '../assets/photo3.jpg';
import Footer from '../components/footer';

  const navigation = [
    "Список товарів",
    "Додати позицію",
    "Відкриті збори",
    "Про проєкт",
    "Більше",
  ];
  const moreNavigation = [
    "Контакти",
  ];
  const paths = [
    "/catalog",
    "/create_product",
    "/donate",
    "/about",
    ""
  ];
  const morePaths = [
    "/",
    "",
  ];

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
          <Navbar navigation={navigation} moreNavigation={moreNavigation} paths={paths} morePaths={morePaths} />
          <Team />
          <Footer />
      </div>
  );
}

export default Contacts;