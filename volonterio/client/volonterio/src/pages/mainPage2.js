import React from "react";
import Hero from "../components/hero";
import Navbar from "../components/navbarforResetPassword";
import Footer from "../components/footer";

const navigation = [
  "Список товарів",
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
  "/catalog",
  "/create_product",
  "/donate",
  "/about",
  ""
];
const morePaths = [
  "/",
  "/Contacts",
];

const Home = () => {
  return (
    <div>
      <Navbar navigation={navigation} moreNavigation={moreNavigation} paths={paths} morePaths={morePaths} />
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;