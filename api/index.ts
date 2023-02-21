import axios from "axios";
import { LoginUserData, RegisterUserData } from "./types";

const instance = axios.create({
    baseURL: "http://localhost:3000"
});


export const UserApi = {
    async login(body: LoginUserData) {
        const { data } = await instance.post("/auth/login", body);
        return data;
    },
    async register(body: RegisterUserData) {
        const { data } = await instance.post("/register", body);
        return data;
    },
    async getme(token: string) {
        const { data } = await instance.get("/profile/" + token,  { headers: { Authorization: `Bearer ${token}` } });
        return data;
    }
}