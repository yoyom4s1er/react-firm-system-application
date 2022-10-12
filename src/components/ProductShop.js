import React, {useContext, useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import Product from "./Product";
import ProductService from "../services/ProductService";
import OrderService from "../services/OrderService";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import BottomNavbar from "./BottomNavbar";
import {wait} from "@testing-library/user-event/dist/utils";

const ProductShop = () => {

    const navigate = useNavigate();

    const [sortType, setSortType] = useState(0);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [basket, setBasket] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const {store} = useContext(Context);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await ProductService.getProductByProviders(searchParams.get("providerName"));
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
    }

    const buyProducts = (e) => {
        e.preventDefault();

        OrderService.addOrder("BUY", basket[0].location_id, basket.map(product => product.id), store.firmName).then((res) => {
            if (products) {
                setProducts(items => items.filter(p => !basket.includes(p)));
            }
            setBasket([]);
        });
    };

    const sortByPrice = (event) => {
        event.preventDefault()

        const sortedArray = [...products];

        if (sortType === 0) {
            console.log("first if")
            sortedArray.sort((p1, p2) => (p1.price > p2.price) ? 1 : ((p2.price > p1.price) ? -1 : 0))
            setSortType(1);
        }
        else {
            console.log("second if")
            sortedArray.sort((p1, p2) => (p1.price > p2.price) ? -1 : ((p2.price > p1.price) ? 1 : 0))
            setSortType(0);
        }

        return setProducts(sortedArray);
    }

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    return (
        <div className="flex flex-col h-screen">
            <div className="container mx-auto my-8 flex-grow">
                <div className="flex shadow border-b">
                    <table className="min-w-full">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6 text-center">
                                Название
                            </th>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6 text-center">
                                Изготовитель
                            </th>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6 text-center">
                                <a className="cursor-pointer" onClick={(event) => sortByPrice(event)}>Цена</a>
                            </th>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6 text-center">
                                Поставщик
                            </th>
                            <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6 text-center">
                                Actions
                            </th>
                        </tr>
                        </thead>
                            <tbody className="bg-white">
                            {products.map((product) => (
                                <Product
                                    product={product}
                                    buyProducts={buyProducts}
                                    basket={basket}
                                    addBasket={addBacket}
                                    deleteBasket={deleteBacket}
                                    key={product.id}></Product>
                            ))}
                            </tbody>
                    </table>
                </div>
            </div>
            {basket.length !== 0 && (
                <BottomNavbar basket={basket} buyProducts={buyProducts}/>
            )}
        </div>
    );
};

export default observer(ProductShop);