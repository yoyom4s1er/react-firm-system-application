import React from 'react';
import {createSearchParams, useNavigate} from "react-router-dom";

const Provider = ({provider}) => {

    const navigate = useNavigate();

    const goToShop = () =>
        navigate({
            pathname: '/productShop',
            search: `?${createSearchParams({providerName: provider.name})}`,
        });

    return (
        <tr key={provider.id}>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{provider.name}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{provider.products.length}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{~~(provider.products.reduce(function (acc, item) {return acc + item.price;}, 0) / provider.products.length)}</div>
            </td>
            <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                <a
                    onClick={() => goToShop()}
                    className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
                    Выбрать
                </a>
            </td>
        </tr>
    );
};

export default Provider;