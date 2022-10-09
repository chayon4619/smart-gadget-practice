import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { CartContext } from './Main';

const Cart = () => {

    const [cart, setCart] = useContext(CartContext)

    return (
        <div>
            <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
                <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 '>
                    <h2 className='text-xl font-semibold'>
                        {cart.length ? 'Review Cart Items' : 'Cart is EMPTY!'}
                    </h2>
                    <ul className='flex flex-col divide-y divide-gray-700'>
                        {cart.map(product => (
                            <CartItem
                                key={product.id}
                                product={product}
                            ></CartItem>
                        ))}
                    </ul>
                    <div className='space-y-1 text-right'>
                        <p>
                            Total amount: <span className='font-semibold'>0$</span>
                        </p>
                        <p className='text-sm text-gray-400'>
                            Not including taxes and shipping costs
                        </p>
                    </div>
                    <div className='flex justify-end space-x-4'>
                        <Link to='/shop'>
                            <button
                                type='button'
                                className='px-6 py-2 border rounded-full border-cyan-400'
                            >
                                Back <span className='sr-only sm:not-sr-only'>to shop</span>
                            </button>
                        </Link>
                        <button
                            //   onClick={orderHandler}
                            type='button'
                            className='px-6 py-2 border font-semibold rounded-full hover:bg-cyan-400 bg-cyan-200 text-gray-800'
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;