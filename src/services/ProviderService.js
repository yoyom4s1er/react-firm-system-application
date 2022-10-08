import axios from "axios";
import $api from "../http";

const PROVIDER_API_BASE_URL = "http://localhost:8080/api/v1/providers";

class ProductService {

    getProviders() {
        return $api.get(PROVIDER_API_BASE_URL);
    }
}

export default new ProductService();