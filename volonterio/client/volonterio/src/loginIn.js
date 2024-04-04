import React from 'react';
import LOGIN_BG from './assets/login_bg.jpg';



const login = () => {
  return (
    <div className="p-40 w-full h-screen flex items-start">
        {/* Створив ліву частину сторінки логування у вигляді фото */}
        <div className='relative w-1/2 h-full flex flex-col'>
            <img src={LOGIN_BG} alt="loging_bg" className="w-full h-full" />
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
                        type="Email"
                        placeholder='Пошта'
                        className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'/>
                <input 
                        type="password"
                        placeholder='Пароль'
                        className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'/>
                </div>
                <div className='w-full flex items-center justify-between'>
                    <div className='w-full flex items-center'>
                        <input type="checkbox" className='w-4 h-4 mr-2'/>
                        <p>Запам'ятати мене</p>
                    </div>
                    <p className='text-sm font-medium whitespace-nowrap cursor-poineter underline underline-offset-2 cursor-pointer'>Забули пароль?</p>
                </div>
                <div className='w-full flex flex-col my-4'>
                    <button className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center'>
                        Увійти
                    </button>
                    <button className='w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center'>
                        Реєстрація
                    </button>
                </div>
            </div>

            <div className='w-full  flex items-center justify-center'>
                <p className='tet-sm font-normal text-[#060606]'>Ще не маєте акаунту? <span className='font-semibold underline underline-offset-2 cursor-pointer'>Створіть його зараз</span></p>
            </div>
        </div>
    </div>
  )
}

export default login;