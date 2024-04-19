import React, { useState, useEffect } from 'react';
import SIGNIN_BG from '../assets/photo1.jpg';
import { Link } from 'react-router-dom';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = async () => {

    const userData = {
        email,
        password,
    };

    try {
        const response = await fetch('/login', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

  useEffect(() => {
    setEmailError(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email));
  }, [email]);

  useEffect(() => {
    setPasswordError(password.length < 8);
  }, [password]);

  return (
    <div className="p-40 w-full h-screen flex items-start">
        {/* Створив ліву частину сторінки логування у вигляді фото */}
        <div className='relative w-1/2 h-full flex flex-col'>
            <img src={SIGNIN_BG} alt="loging_bg" className="w-full h-full" />
        </div>
        {/* Права частина сторінки логування */}
        <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20  justify-between items-center'>
            <h1 className='text-4xl text-[#060606] font-semibold mx-auto'>Вітаємо!</h1>

            <div className='w-full flex flex-col max-w-[650px]'>
                    <div className='w-full flex flex-col mb-2'>
                        <h3 className='text-3xl font-semibold mb-4'>Вхід</h3>
                        <p className='text-base mb-2'>З поверненням! Будь ласка, введіть ваші дані</p>
                    </div>
                <div className='w-full flex flex-col'>
                    <input 
                        type="email"
                        placeholder='Пошта'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none ${emailError ? 'border-red-500' : ''}`}/>
                    {emailError && <p className="text-red-500">Введіть дійсну адресу електронної пошти.</p>}
                    <input 
                        type="password"
                        placeholder='Пароль'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none ${passwordError ? 'border-red-500' : ''}`}/>
                    {passwordError && <p className="text-red-500">Пароль повинен містити щонайменше 8 символів.</p>}
                </div>
                <div className='w-full flex items-center justify-between'>
                    <div className='w-full flex items-center'>
                        <input type="checkbox" className='w-4 h-4 mr-2'/>
                        <p>Запам'ятати мене</p>
                    </div>
                    <p className='text-sm font-medium whitespace-nowrap cursor-poineter underline underline-offset-2 cursor-pointer'>Забули пароль?</p>
                </div>
                <div className='w-full flex flex-col my-4'>
                    <button onClick={handleSubmit} className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center'>
                        Увійти
                    </button>
                    <Link to="/signUp" className='w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center'>
                        Реєстрація
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn;
