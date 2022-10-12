import React from 'react';
import {useNavigate} from "react-router-dom";

const FirmPage = () => {

    const navigate = useNavigate();

    return (
        <div>
           <button className="bg-gray-300 rounded" onClick={event => navigate("/providerList")}>
               Купить компоненты
           </button>
            <button className="bg-gray-300 rounded" onClick={event => navigate("/storage")}>
                Склад
            </button>
            <button className="bg-gray-300 rounded" onClick={event => navigate("/orders")}>
                Совершённые сделки
            </button>
        </div>
    );
};

export default FirmPage;