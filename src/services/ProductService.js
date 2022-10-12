import axios from "axios";
import $api from "../http";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/products";

class ProductService {

    getStorage(firmName) {
        return $api.get(EMPLOYEE_API_BASE_URL + "/" + firmName, { params: { locationType: "FIRM_COLLECTOR" }});
    }

    getProductByProviders(providerName) {
        return $api.get(EMPLOYEE_API_BASE_URL, { params: { locationType: "FIRM_PROVIDER", locationName: providerName }});
    }

}

export default new ProductService();