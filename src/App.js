import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import Storage from "./components/Storage";
import Navbar from "./components/Navbar";
import UpdateEmployee from "./components/UpdateEmployee";
import ProviderList from "./components/ProviderList";
import FirmPage from "./components/FirmPage";
import ProductShop from "./components/ProductShop";
import LoginForm from "./components/LoginForm";
import {useContext, useEffect} from "react";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import OrderList from "./components/OrderList";

function App() {

  const {store} = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth()
    }
  }, [])

  if (!store.isAuth) {
    return (<LoginForm/>)
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<FirmPage />} />
          <Route path="/" element={<FirmPage />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/productShop" element={<ProductShop />} />
          <Route path="/providerList" element={<ProviderList />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default observer(App);
