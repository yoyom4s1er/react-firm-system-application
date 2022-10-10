import $api from "../http";

export default  class AuthService {
    static async login(username, password) {
        return $api.post("/v1/auth/login", {username, password});
    }

    static async registration(username, password) {
        return $api.post("/v1/auth/registration", {username, password});
    }
}