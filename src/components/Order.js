import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import ProductService from "../services/ProductService";

const Order = ({order}) => {

    const navigate = useNavigate();

    return (
        <tr key={order.id}>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{order.operationType}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{order.operationTargetName}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{order.date.substring(0, 10)}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{order.products.length}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{order.totalPrice}</div>
            </td>
            <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                <a
                    //onClick={event => addBacket(event, )}
                    className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
                    Посмотреть
                </a>
            </td>
        </tr>
    );
};

export default Order;