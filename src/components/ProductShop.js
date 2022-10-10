import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Product from "./Product";
import ProductService from "../services/ProductService";
import OrderService from "../services/OrderService";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import BottomNavbar from "./BottomNavbar";

const ProductShop = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [basket, setBasket] = useState([]);

    const {store} = useContext(Context);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await ProductService.getProductByProviders();
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const addBacket = (e, product) => {
        e.preventDefault();
        setBasket(oldArray => [...oldArray, product]);
    }

    const deleteBacket = (e, product) => {
        e.preventDefault();
        setBasket(basket.filter(item => item.id !== product.id));
        console.log(basket);
    }

    const buyProduct = (e, id) => {
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
    };

    return (
        <div>
            <div className="container mx-auto my-8">
                <div className="flex shadow border-b">
                    <table className="min-w-full">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                                Название
                            </th>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                                Изготовитель
                            </th>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                                Цена
                            </th>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                                Поставщик
                            </th>
                            <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                                Actions
                            </th>
                        </tr>
                        </thead>
                        {!loading && (
                            <tbody className="bg-white">
                            {products.map((product) => (
                                <Product
                                    product={product}
                                    buyProduct={buyProduct}
                                    basket={basket}
                                    addBasket={addBacket}
                                    deleteBasket={deleteBacket}
                                    key={product.id}></Product>
                            ))}
                            </tbody>
                        )}
                    </table>
                </div>
            </div>
            <BottomNavbar/>
        </div>
    );
};

export default observer(ProductShop);