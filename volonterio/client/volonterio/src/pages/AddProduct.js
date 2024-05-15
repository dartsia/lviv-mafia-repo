import React, { useState } from 'react';
import background_BG from '../assets/photo2.jpg';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [organization, setOrganization] = useState('');
  const [productFeatures, setProductFeatures] = useState('');
  const [productImage, setProductImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClickUpload = () => {
    document.getElementById('productImage').click();
  };

  const handleSaveImage = () => {
    console.log('Збереження фото:', productImage);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('name', productName);
    formData.append('description', productDescription);
    formData.append('price', productPrice);
    formData.append('organization', organization);
    formData.append('characteristic', productFeatures);
    formData.append('image', document.getElementById('productImage').files[0]);
  
    try {
      const response = await fetch('http://localhost:3001/products', {
        method: 'POST',
        body: formData  // відправляємо дані як FormData, а не як JSON
      });
  
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
  
      const result = await response.text(); 
      console.log('Product added:', result);
    } catch (error) {
      console.error('Failed to add product:', error);
    }
  };
    
  return (
    <div className="p-40 w-full h-screen overflow-y-auto">
      <img src={background_BG} alt="Product" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 bg-white p-8 rounded-md max-w-sm w-full mx-auto">
        <p className="text-center text-4xl font-bold mb-4">Створіть товар</p>
        <p className="text-center text-xl font-light mb-4">Введіть, будь ласка, інформацію про товар</p>
        <div className='w-full flex flex-col'>
          <div className='w-full flex flex-col mb-2'>
            <label htmlFor="productImage" className='text-base mb-2 cursor-pointer'>
              <button className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md " onClick={handleClickUpload}>Додати фото</button>
              <input
                id="productImage"
                name="productImage"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className='hidden' />
            </label>
            {productImage && (
              <img src={productImage} alt="Product" className="w-full h-auto max-h-60 mb-2" />
            )}
          </div>
        </div>
        <div className='w-full flex flex-col'>
          <input
            name="productName"
            type="text"
            value={productName}
            placeholder="Назва товару"
            onChange={(e) => setProductName(e.target.value)}
            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
          <input
            name="organization"
            type="text"
            value={organization}
            placeholder="Організація"
            onChange={(e) => setOrganization(e.target.value)}
            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
          <input
            name="productDescription"
            type="text"
            value={productDescription}
            placeholder="Опис"
          onChange={(e) => setProductDescription(e.target.value)}
            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
          <input
            name="productPrice"
            type="number"
            value={productPrice}
            placeholder="Ціна товару"
            onChange={(e) => setProductPrice(e.target.value)}
            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
          <input
            name="productFeatures"
            type="text"
            value={productFeatures}
            placeholder="Характеристики товару"
            onChange={(e) => setProductFeatures(e.target.value)}
            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
          <div className='w-full flex flex-col my-4'>
            <button className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center' onClick={handleSubmit}>
              Додати товар до каталогу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

