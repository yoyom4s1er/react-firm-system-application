import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product, deleteEmployee }) => {
  const navigate = useNavigate();

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };

  return (
    <tr key={product.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{product.name}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{product.producer}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{product.price}</div>
      </td>
        <td className="text-left px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500"></div>
        </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          /*onClick={(e, id) => editEmployee(e, employee.id)}*/
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
          Купить
        </a>
      </td>
    </tr>
  );
};

export default Product;
