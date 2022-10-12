import React, {useContext} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";

const Navbar = () => {

    const {store} = useContext(Context);
    const navigate = useNavigate();

  return (
    <div className="bg-gray-800 sticky top-0">
      <div className="h-16 px-8 flex items-center justify-between grid grid-cols-3">
        <p className="text-white font-bold">Firm Management System</p>
          <div className="text-center text-white font-semibold w-max h-10 flex justify-center items-center">
              <a className="cursor-pointer mx-2 px-2 h-10 flex justify-center items-center" onClick={() => navigate("/storage")}>
                  Товары на складе
              </a>
              <a className="cursor-pointer mx-2 px-2 h-10 flex justify-center items-center" onClick={() => navigate("/ProviderList")}>
                  Список поставщиков
              </a>
              <a className="cursor-pointer mx-2 px-2 h-10 flex justify-center items-center" onClick={() => navigate("/orders")}>
                  История заказов
              </a>
          </div>
          <p className="text-white font-semibold text-right">Firm {store.firmName}</p>
      </div>
    </div>
  );
};

export default observer(Navbar);
