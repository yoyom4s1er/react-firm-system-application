import axios from "axios";
import $api from "../http";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  saveEmployee(employee) {
    return $api.post(EMPLOYEE_API_BASE_URL, employee);
  }

  getEmployees() {
    return $api.get(EMPLOYEE_API_BASE_URL);
  }

  deleteEmployee(id) {
    return $api.delete(EMPLOYEE_API_BASE_URL + "/" + id);
  }

  getEmployeeById(id) {
    return $api.get(EMPLOYEE_API_BASE_URL + "/" + id);
  }

  updateEmployee(employee, id) {
    return $api.put(EMPLOYEE_API_BASE_URL + "/" + id, employee);
  }
}

export default new EmployeeService();
