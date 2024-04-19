import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar'
import product_card from '../data/product_data';
  
const MainContent = () =>{
    console.log(product_card);
    const listItems = product_card.map((item)=>
        <div className='card' key={item.id}>
            <div className='card_img' >
                <img src={item.image}/>
            </div>
            <div className='card_header'>
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <div className='btn'>Додати до кошика</div>
            </div>
        </div>
    );
    return(
        <div className="main_content">
            {listItems}
        </div>
    );
}

const catalog_product = () =>{
    return (
        <div>
            <Navbar />
            <MainContent />
            <Footer />
        </div>
    );
}
export default catalog_product