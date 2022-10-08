import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import Navbar from "./components/Navbar";
import UpdateEmployee from "./components/UpdateEmployee";
import ProviderList from "./components/ProviderList";
import FirmPage from "./components/FirmPage";
import ProductShop from "./components/ProductShop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<FirmPage />} />
          <Route path="/" element={<FirmPage />} />
          <Route path="/employeeList" element={<EmployeeList />} />
          <Route path="/productShop" element={<ProductShop />} />
          <Route path="/providerList" element={<ProviderList />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
