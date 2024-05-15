import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function Cart({ cartItems = [], setCartItems, isOpen, setOpen }) {
    const increaseQuantity = (itemId) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    const decreaseQuantity = (itemId) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === itemId && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 overflow-y-auto z-50" onClose={() => setOpen(false)}>


                <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                    </Transition.Child>

                    <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">Кошик</Dialog.Title>
                            <div className="mt-2">
                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                    {cartItems.map((item) => (
                                        <li key={item.id} className="py-6 flex items-center space-x-4">
                                            <div className="flex-shrink-0 relative w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                                <p className="absolute top-2 left-2 text-sm text-gray-900">{item.name}</p>
                                                <img src={item.image} alt={item.name} className="w-full h-full object-center object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between">
                                                    <p className="text-lg font-medium text-gray-900">{item.product_name}</p>
                                                    <p className="ml-4 text-lg font-medium text-gray-900">{item.price}</p>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                                                <div className="mt-4 flex items-center">
                                                    <div className="flex items-center ml-4">
                                                        <button onClick={() => decreaseQuantity(item.id)} className="text-gray-500 px-3">-</button>
                                                        <p className="text-sm text-gray-500">{item.quantity}</p>
                                                        <button onClick={() => increaseQuantity(item.id)} className="text-gray-500 px-3">+</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-8">
                                <div className="mt-6">
                                    <a href="#" className="block w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Оформити замовлення</a>
                                </div>
                                <div className="mt-6">
    <button onClick={() => setOpen(false)} className="block w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-700 bg-gray-100 hover:bg-gray-200">Продовжити покупки</button>
</div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
