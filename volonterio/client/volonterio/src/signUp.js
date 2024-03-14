import React from 'react';
import SIGNUP_BG from './assets/login_bg.jpg';

const signUp = () => {
    return (
        <div className="p-40 w-full h-screen flex items-start">
            {/* Ліва частина сторінки з фото */}
            <div className='relative w-1/2 h-full flex flex-col'>
                <img src={SIGNUP_BG} alt="SignUp_bg" className="w-full h-full" />
            </div>
            {/* Права частина сторінки з формою реєстрації */}
            <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-10 justify-between items-center'>
                <h1 className='text-4xl text-[#060606] font-semibold mx-auto'>Реєстрація</h1>

                <div className='w-full flex flex-col max-w-[650px]'>
                    <div className='w-full flex flex-col mb-2'>
                        <h3 className='text-3xl font-semibold mb-4'>Створення облікового запису</h3>
                        <p className='text-base mb-2'>Будь ласка, введіть ваші дані для реєстрації</p>
                    </div>
                    <div className='w-full flex flex-col'>
                        <input 
                            type="username"
                            placeholder="Ім'я користувача"
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'/>
                        <input 
                            type="email"
                            placeholder='Пошта'
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'/>
                        <input 
                            type="password"
                            placeholder='Пароль'
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'/>
                        <input 
                            type="password"
                            placeholder='Підтвердьте пароль'
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'/>
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <div className='w-full flex items-center'>
                            <input type="checkbox" className='w-4 h-4 mr-2'/>
                            <p>Погодитися з умовами</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col my-4'>
                        <button className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center'>
                            Зареєструватися
                        </button>
                    </div>
                </div>

                <div className='w-full  flex items-center justify-center'>
                    <p className='text-sm font-normal text-[#060606]'>Вже маєте акаунт? <span className='font-semibold underline underline-offset-2 cursor-pointer'>Увійдіть</span></p>
                </div>
            </div>
        </div>
    )
}

export default signUp;