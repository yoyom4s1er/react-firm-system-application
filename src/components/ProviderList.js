import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import Product from "./Product";
import ProductService from "../services/ProductService";
import Provider from "./Provider";
import ProviderService from "../services/ProviderService";

const ProviderList = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await ProviderService.getProviders();
                setProviders(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div className="container mx-auto my-8">
            <div className="h-12">
                <button
                    onClick={() => navigate("/addEmployee")}
                    className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
                    Add Employee
                </button>
            </div>
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
                        <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    {!loading && (
                        <tbody className="bg-white">
                        {providers.map((provider) => (
                            <Provider
                                provider={provider}
                                key={provider.id}></Provider>
                        ))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
};

export default ProviderList;