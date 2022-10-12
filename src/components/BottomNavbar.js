import React from 'react';

const BottomNavbar = ({basket, buyProducts}) => {
    return (
        <div className="bg-white fixed sticky bottom-0">
            <div className="h-12 px-8 flex items-center justify-center">
                <p className="text-black font-bold px-4">Товаров в корзине: {basket.length}</p>
                <p className="text-black font-bold px-4">Итоговая цена: {basket.reduce((partialSum, a) => partialSum + a.price, 0)}</p>
                <button className="bg-blue-400 px-2 py-1 rounded shadow font-bold" onClick={event => buyProducts(event)}>Совершить покупку</button>
            </div>
        </div>
    );
};

export default BottomNavbar;