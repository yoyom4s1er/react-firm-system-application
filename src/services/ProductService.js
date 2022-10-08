import axios from "axios";
import $api from "../http";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/products";

class ProductService {

    getProducts() {
        return $api.get(EMPLOYEE_API_BASE_URL, { params: { locationType: "FIRM_PROVIDER" } });
    }
}

export default new ProductService();