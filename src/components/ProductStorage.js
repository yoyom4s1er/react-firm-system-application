import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import ProductService from "../services/ProductService";

const Product = ({ product, index}) => {
  const navigate = useNavigate();

  return (
    <tr key={product.id}>
        <td className="text-left px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500">{index}</div>
        </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{product.name}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{product.producer}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{product.price}</div>
      </td>
    </tr>
  );
};

export default Product;
