import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product, buyProduct, basket, addBasket, deleteBasket}) => {
  const navigate = useNavigate();

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };

    useEffect(() => {
        console.log("In Order class: " + basket);
    }, [basket]);

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
            <div className="text-sm text-gray-500">{product.locationEntity?.name}</div>
        </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
          {basket.includes(product) ?
              (<a
                  onClick={event => deleteBasket(event, product)}
                  className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
                  Убрать
              </a>)
              :
              (<a
                  onClick={event => addBasket(event, product)}
                  className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
                  В корзину
              </a>)}
      </td>
    </tr>
  );
};

export default Product;
