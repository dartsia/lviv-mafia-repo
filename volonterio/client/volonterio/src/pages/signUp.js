import React, { useState, useEffect } from 'react';
import SIGNUP_BG from '../assets/login_bg.jpg';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  useEffect(() => {
    setEmailError(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email));
  }, [email]);

  useEffect(() => {
    setPasswordError(password.length < 8);
  }, [password]);

  useEffect(() => {
    setConfirmPasswordError(password !== confirmPassword);
  }, [password, confirmPassword]);

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
                </div>
                <div className='w-full flex flex-col'>
                    <input 
                        type="username"
                        placeholder="Ім'я користувача"
                        className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'/>
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
                    <input 
                        type="password"
                        placeholder='Підтвердьте пароль'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={`w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none ${confirmPasswordError ? 'border-red-500' : ''}`}/>
                    {confirmPasswordError && <p className="text-red-500">Паролі не співпадають.</p>}
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
export default SignUp;