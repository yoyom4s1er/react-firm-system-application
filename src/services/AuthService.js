import $api from "../http";

export default  class AuthService {
    static async login(name, password) {
        return $api.post("/login", {name, password});
    }

    static async registration(name, password) {
        return $api.post("/registration", {name, password});
    }
}