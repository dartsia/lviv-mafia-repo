import React, { useState, useEffect } from 'react';
import SIGNUP_BG from '../assets/login_bg.jpg';
import { Link } from 'react-router-dom';


const SignUp = () => {

  const [name, set_name] = useState('');
  const [surname, set_surname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleSubmit = async () => {
    if (password !== confirmedPassword) {
        setConfirmPasswordError(true);
        return;
    }

    const userData = {
        name,
        surname,
        email,
        password,
        confirmedPassword
    };

    try {
        const response = await fetch('/registry', { 
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

  useEffect(() => {
    setConfirmPasswordError(password !== confirmedPassword);
  }, [password, confirmedPassword]);

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
                        {/* <h3 className='text-3xl font-semibold mb-4'>Створення облікового запису</h3> */}
                        <p className='text-base mb-2'>Будь ласка, введіть ваші дані для реєстрації</p>
                    </div>
                </div>
                <div className='w-full flex flex-col'>
                    <input 
                        name ="name"
                        type="username"
                        value={name}
                        placeholder="Ім'я користувача"
                        onChange={(e) => set_name(e.target.value)}
                        className='w-1/2 text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'/>
                    <input 
                        name ="surname"
                        type="username"
                        value={surname}
                        placeholder="Прізвище користувача"
                        onChange={(e) => set_surname(e.target.value)}
                        className='lg:w-1/2 text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'/>   
                    <input 
                        name ="email"
                        type="email"
                        placeholder='Пошта'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none ${emailError ? 'border-red-500' : ''}`}/>
                    {emailError && <p className="text-red-500">Введіть дійсну адресу електронної пошти.</p>}
                    <input 
                        name ="password"
                        type="password"
                        placeholder='Пароль'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none ${passwordError ? 'border-red-500' : ''}`}/>
                    {passwordError && <p className="text-red-500">Пароль повинен містити щонайменше 8 символів.</p>}
                    <input 
                        name = "confirmedPassword"
                        type="password"
                        placeholder='Підтвердьте пароль'
                        value={confirmedPassword}
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
                        <button onClick={handleSubmit} className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center'>
                            Зареєструватися
                        </button>
                    </div>
                </div>

                <div className='w-full  flex items-center justify-center'>
                    <p className='text-sm font-normal text-[#060606]'>Вже маєте акаунт? <Link to ="/signIn" className='font-semibold underline underline-offset-2 cursor-pointer'>Увійдіть</Link></p>
                </div>
            </div>
        </div>
    )
}
export default SignUp;