import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Carousel from '../components/Carousel';


const DonatePage = () => {
  return (
    <div>
      <Navbar />
      <Carousel>
            <div className="flex items-center justify-center select-none bg-blue-600"> Інформація про 1 збір</div>
            <div className="flex items-center justify-center select-none bg-yellow-400"> Інформація про 2 збір</div>
            <div className="flex items-center justify-center select-none bg-green-500"> Інформація про 3 збір</div>
      </Carousel>
      <Footer />
    </div>
  );
}

export default DonatePage;