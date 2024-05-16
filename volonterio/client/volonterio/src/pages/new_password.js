import React, { useState, useEffect } from 'react'; 
import PasswordRecovery_BG from '../assets/photo1.jpg';

const PasswordReset = ({ setModalActive, setNewPasswordModalActive }) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [isReset, setIsReset] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        if (formSubmitted) {
            setPasswordError(newPassword !== confirmPassword || newPassword.length < 8);
        }
    }, [newPassword, confirmPassword, formSubmitted]);

    function handleBackToSignInClick() {
        setNewPasswordModalActive(false); // закрити вікно
        setModalActive(true); // вхід
    }
    function handleCreateClick() {
        setNewPasswordModalActive(false); // закрити вікно
        setModalActive(true); // вхід
    }

    const handleSubmit = async() => {
        // Перевірка на співпадіння паролів
        const isValidPassword = newPassword === confirmPassword;
        if (!isValidPassword) {
            setPasswordError(true);
            return;
        }

        // Перевірка на довжину паролю
        if (newPassword.length < 8) {
            setPasswordError(true);
            return;
        }
        try {
            const response = await fetch('/reset-password/:token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ newPassword })
            });
    
            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    setIsReset(true);
                    handleCreateClick();
                } else {
                    // Обробка помилок
                    // handleCreateClick();
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="pb-60 w-full h-screen flex items-start">
            {/* Ліва частина сторінки */}
            <div className='relative w-1/2 h-full flex flex-col'>
                <img src={PasswordRecovery_BG} alt="PasswordRecovery_bg" className="w-full h-full" />
            </div>
            {/* Права частина сторінки */}
            <div className='pb-60 w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center'>
                <h1 className='text-4xl text-[#060606] font-semibold mx-auto'>Відновлення паролю</h1>

                <div className='w-full flex flex-col max-w-[650px]'>
                    <div className='w-full flex flex-col mb-2'>
                        <h3 className='text-3xl font-semibold mb-4'>Введіть новий пароль</h3>
                    </div>
                    <div className='w-full flex flex-col'>
                        <input
                            type="password"
                            placeholder='Новий пароль'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className={`w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none ${passwordError ? 'border-red-500' : ''}`} />
                        <input
                            type="password"
                            placeholder='Підтвердіть новий пароль'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={`w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none ${passwordError ? 'border-red-500' : ''}`} />
                        {passwordError && <p className="text-red-500">Паролі не співпадають або пароль менше 8 символів.</p>}
                    </div>
                    {isReset ? (
                        <p className="text-green-500 mt-2">Пароль успішно змінено.</p>
                    ) : (
                        <button onClick={() => {
                            setFormSubmitted(true);
                            handleSubmit();
                        }} className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center'>
                            Змінити пароль
                        </button>
                    )}
                </div>
                <div className='w-full flex items-center justify-between'>
                    <a onClick={handleBackToSignInClick} className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2 cursor-pointer'>
                        Назад до входу
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PasswordReset;

