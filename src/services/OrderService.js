import $api from "../http";
import {Context} from "../index";
import {useContext} from "react";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/orders";

class OrderService {

    addOrder(operationType,operationTargetId ,products, firmName) {
        return $api.post(EMPLOYEE_API_BASE_URL, {operationType:operationType, operationTargetId:operationTargetId, products:products, firmName:firmName});
    }

    getAllByFirmName(firmName) {
        return $api.get(EMPLOYEE_API_BASE_URL + "/" + firmName)
    }
}

export default new OrderService();