import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import ProductService from "../services/ProductService";

const Product = ({ product, products, basket, addBasket, deleteBasket}) => {
  const navigate = useNavigate();

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };

  if (basket?.includes(product)) {
      return (
          <tr key={product.id} className="bg-green-300 bg-opacity-50">
              <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 text-center">{product.name}</div>
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 text-center">{product.producer}</div>
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 text-center">{product.price}</div>
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 text-center">{product.locationEntity?.name}</div>
              </td>
              <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm hover:cursor-pointer" onClick={event => deleteBasket(event, product)}>
                  <a
                      className="text-indigo-600 hover:text-indigo-800 px-4">
                      Убрать
                  </a>
              </td>
          </tr>
      )
  }

  return (
    <tr key={product.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500 text-center">{product.name}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500 text-center">{product.producer}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500 text-center">{product.price}</div>
      </td>
        <td className="text-left px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500 text-center">{product.locationEntity?.name}</div>
        </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm hover:cursor-pointer text-center" onClick={event => addBasket(event, product)}>
          <a
              className="text-indigo-600 hover:text-indigo-800 px-4">
              В корзину
          </a>
      </td>
    </tr>
  );
};

export default Product;
