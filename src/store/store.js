import {makeAutoObservable} from "mobx"
import AuthService from "../services/AuthService";
import axios from "axios";
import {API_URL} from "../http";
import jwt from 'jwt-decode'

export default class Store {
    firmName = "";
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }


    setFirm(firm) {
        this.firmName = firm;
    }

    async login(name, password) {
        try {
            const response = await AuthService.login(name, password);
            console.log(response);
            localStorage.setItem("token", response.data.accessToken);
            this.setAuth(true)
            const decoded = jwt(response.data.accessToken);
            this.setFirm(decoded.sub)
            console.log(localStorage.getItem("token"))
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async registration(name, password) {
        try {
            const response = await AuthService.registration(name, password);
            console.log(response);
            localStorage.setItem("token", response.data.accessToken);
            this.setAuth(true)
            this.setFirm(name)
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
    
    async checkAuth() {
        try {
            const response = await axios.post(API_URL + "/v1/auth/refresh", {}, {withCredentials: true})
            localStorage.setItem("token", response.data.accessToken);
            const decoded = jwt(response.data.accessToken);
            this.setFirm(decoded.sub)
            this.setAuth(true)
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
}