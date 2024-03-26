import React from "react";
import Container from "./container";
import Logo from "../assets/logo.svg"

export default function Footer() {
  const navigation = [
    // "Ще щось можна добавити",
    "Список товарів",
    "Волонтери",
    "Про проєкт",
    "Контакти",
  ];
  //не впенений що потрібно
  const legal = ["Правила", "Угода користувача", "ще щось хаха"];
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              <a href="/" className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                <img
                  src={Logo}
                  alt="N"
                  width="32"
                  height="32"
                  className="w-8"
                />
                <span>Львівська Мафія</span>
              </a>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              Якась додаткова інформація про нас, можливо і зайве
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <a key={index} href="/" className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">                 
                    {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <a key={index} href="/" className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">      
                    {item}
                </a>
              ))}
            </div>
          </div>
          <div className="">
            <div>Слідкуйте за нами</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              {/* Можна добавити якісь посилання на ютуб наприклад */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
