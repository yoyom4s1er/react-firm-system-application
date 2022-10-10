import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Context} from "../index";
import ProductService from "../services/ProductService";
import OrderService from "../services/OrderService";
import Product from "./Product";
import Order from "./Order";

const OrderList = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);

    const {store} = useContext(Context);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await OrderService.getAllByFirmName(store.firmName);
                setOrders(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    /*const buyProduct = (e, id) => {
        e.preventDefault();

        let obj = products.find(p => p.id === id);
        let array = [];
        array.push(obj.id)

        console.log(array)

        OrderService.addOrder("BUY", obj.location_id, array, store.firmName).then((res) => {
            if (products) {
                setProducts((prevElement) => {
                    return prevElement.filter((employee) => employee.id !== id);
                });
            }
        });
    };*/

    return (
        <div className="container mx-auto my-8">
            <div className="flex shadow border-b">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                            Тип операции
                        </th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                            Поставщик/Заказчик
                        </th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                            Дата
                        </th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                            Количество товаров
                        </th>
                        <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    {!loading && (
                        <tbody className="bg-white">
                        {orders.map((order) => (
                            <Order
                                order={order}
                                key={order.id}></Order>
                        ))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
};

export default OrderList;