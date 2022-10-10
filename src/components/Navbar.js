import React, {useContext} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Navbar = () => {

    const {store} = useContext(Context);

  return (
    <div className="bg-gray-800 sticky top-0">
      <div className="h-16 px-8 flex items-center justify-between">
        <p className="text-white font-bold">Employee Management System</p>
          <p className="text-white font-bold">Firm {store.firmName}</p>
      </div>
    </div>
  );
};

export default observer(Navbar);
