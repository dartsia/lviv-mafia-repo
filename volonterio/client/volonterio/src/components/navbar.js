import { useState, useEffect, useRef } from 'react';
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";
import Logo from "../assets/logo.svg"
import Modal from "../modal/modal";
import SignIn from '../pages/signIn';
import PasswordRecovery from '../pages/password_recovery';
import NewPassword from '../pages/new_password';

const Navbar = ({ navigation, moreNavigation, paths, morePaths}) => {
  const [modalActive, setModalActive] = useState(false); //модальне вікно входу
  const [forgotPasswordModalActive, setForgotPasswordModalActive] = useState(false); //для відновлення паролю
  const [newPasswordModalActive, setNewPasswordModalActive] = useState(false); //для встановлення нового паролю

  const [isHovered, setIsHovered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); //залогінений чи ні
  const [name, setUserName] = useState(''); //для імені користувача
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const hoverRef = useRef(null);

  const handleLogout = () => {
    setIsLoggingOut(true);
    fetch('/logout', {
      method: 'GET',

    })
    .then(response => {
      if (response.ok) {
        setIsLoggedIn(false);
        setUserName('');
        window.location.reload();
      } else {
      }
    })
    .catch(error => {
    })
    .finally(() => {
      setIsLoggingOut(false);
    });
  };

  useEffect(() => {
    let timer;
    if (isHovered) {
      timer = setTimeout(() => {
        if (!hoverRef.current.contains(document.activeElement)) {
          setIsHovered(false);
        }
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [isHovered]);

  // для перевірки входу
  useEffect(() => {
    fetch('/status')
      .then(response => response.text())
      .then(data => {
        if (data === 'User is logged in') {
          setIsLoggedIn(true);
          setUserName(data.name);
        }
      });
  }, []);

  const logoutButton = (
    <button
      className="px-6 py-2 text-white bg-red-600 rounded-md md:ml-5"
      onClick={handleLogout}
      disabled={isLoggingOut}
    >
      {isLoggingOut ? 'Вихід...' : 'Вийти'}
    </button>
  );

  let loginButton;
if (isLoggedIn) {
  loginButton = (
    <>
      <span className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">Ви увійшли</span>
      {logoutButton}
    </>
  );
} else {
  loginButton = (
    <>
    <a onClick={()=>setModalActive(true)} className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5 cursor-pointer">Увійти</a> 
    <Modal active={modalActive} setActive={setModalActive}>
      <SignIn setModalActive={setModalActive} setForgotPasswordModalActive={setForgotPasswordModalActive}/>
    </Modal>
    <Modal active={forgotPasswordModalActive} setActive={setForgotPasswordModalActive}>
      <PasswordRecovery setModalActive={setModalActive} setForgotPasswordModalActive={setForgotPasswordModalActive} setNewPasswordModalActive={setNewPasswordModalActive}/>
    </Modal>
    <Modal active={newPasswordModalActive} setActive={setNewPasswordModalActive}>
      <NewPassword setModalActive={setModalActive} setNewPasswordModalActive={setNewPasswordModalActive}/>
    </Modal>
    </>
  );
}


  return (
    <div className="w-full shadow-inner">
      <nav className="container relative flex items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex items-center justify-between w-full lg:w-auto">
                <a href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      <img
                        src={Logo}
                        alt="LvivMafia"
                        width="32"
                        height="32"
                        className="w-8"
                      />
                    </span>
                    <span>Львівська Мафія</span>
                  </span>
                </a>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="flex w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <a key={index} href="/" className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                          {item}
                      </a>
                    ))}
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <a href={paths[index]} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 transform hover:scale-105 transition-transform duration-200"
                   onMouseEnter={() => menu === "Більше" && setIsHovered(true)}
                   onMouseLeave={() => menu === "Більше" && setIsHovered(true)}
                   ref={hoverRef}>
                    {menu}
                </a>
                {menu === "Більше" && isHovered && (
                  <ul className="absolute w-32 py-2 mt-2 space-y-2 text-gray-800 bg-white border border-gray-100 rounded-md shadow-lg dark:text-gray-300 dark:bg-gray-800">
                    {moreNavigation.map((item, index) => (
                      <li key={index}>
                        <a href={morePaths[index]} className="block px-4 py-2 text-sm transition-colors duration-200 transform rounded-md hover:bg-indigo-500 hover:text-white">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            
          </ul>
        </div>
        <div className="hidden mr-3 space-x-4 lg:flex nav__item lg:pl-4 pl-4">
          {loginButton}
          <ThemeChanger />
        </div>
      </nav>
     </div>
   );
 }
 export default Navbar;

