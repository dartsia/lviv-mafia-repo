import { Link } from 'react-router-dom';
import PasswordRecovery_BG from '../assets/photo1.jpg';
import React, { useState, useEffect } from 'react';

const PasswordRecovery = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        if (formSubmitted) {
            setEmailError(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email));
        }
    }, [email, formSubmitted]);

    const handleSubmit = () => {
        // Перевірка на правильність введення email
        const isValidEmail = /\S+@\S+\.\S+/.test(email);
        if (!isValidEmail) {
            setEmailError(true);
            return;
        }

        // Логіка для відправлення email із кодом для відновлення паролю
        // setIsSent(true);

        // Відкриття модального вікна
        setIsModalOpen(true);
    }

    return (
        <div className="p-40 w-full h-screen flex items-start">
            {/* Ліва частина сторінки */}
            <div className='relative w-1/2 h-full flex flex-col'>
                <img src={PasswordRecovery_BG} alt="PasswordRecovery_bg" className="w-full h-full" />
            </div>
            {/* Права частина сторінки */}
            <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20  justify-between items-center'>
                <h1 className='text-4xl text-[#060606] font-semibold mx-auto'>Відновлення паролю</h1>

                <div className='w-full flex flex-col max-w-[650px]'>
                    <div className='w-full flex flex-col mb-2'>
                        <h3 className='text-3xl font-semibold mb-4'>Забули пароль?</h3>
                        <p className='text-base mb-2'>Введіть вашу адресу електронної пошти, щоб отримати лист із кодом для відновлення паролю</p>
                    </div>
                    <div className='w-full flex flex-col'>
                        <input
                            type="email"
                            placeholder='Пошта'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none ${emailError ? 'border-red-500' : ''}`} />
                        {emailError && <p className="text-red-500">Введіть дійсну адресу електронної пошти.</p>}
                    </div>
                    {isSent ? (
    <p className="text-green-500 mt-2">Лист із кодом для відновлення паролю відправлено на вашу пошту.</p>
) : (
    <Link to="/NewPassword">
        <button onClick={() => {
            handleSubmit();
            setFormSubmitted(true);
        }} className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center'>
            Надіслати код
        </button>
    </Link>
)}
                </div>
                <div className='w-full flex items-center justify-between'>
                    <Link to="/signIn" className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2 cursor-pointer'>
                        Назад до входу
                    </Link>
                </div>
            </div>
            {/* Модальне вікно */}
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg">
                        {/* Вміст модального вікна */}
                        <h2 className="text-2xl font-semibold mb-4">Модальне вікно</h2>
                        <p>Тут може бути ваше модальне вікно з вмістом.</p>
                        <button onClick={() => setIsModalOpen(false)} className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            Закрити
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PasswordRecovery;
