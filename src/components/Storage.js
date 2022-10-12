import React, {useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Product from "./Product";
import ProductService from "../services/ProductService";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ProductStorage from "./ProductStorage";

const Storage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const {store} = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ProductService.getStorage(store.firmName);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((res) => {
      if (products) {
        setProducts((prevElement) => {
          return prevElement.filter((product) => product.id !== id);
        });
      }
    });
  };

  return (
      <div className="flex flex-row">
        <div className="container mx-auto my-8">
          <div className="flex shadow border-b">
            <table className="min-w-full">
              <thead className="bg-gray-50">
              <tr>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Номер
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Название
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Изготовитель
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Цена
                </th>
              </tr>
              </thead>
              {!loading && (
                  <tbody className="bg-white">
                  {products.map((product, index) => (
                      <ProductStorage
                          product={product}
                          index={index}
                          key={product.id}></ProductStorage>
                  ))}
                  </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
  );
};

export default observer(Storage);
