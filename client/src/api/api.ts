import axios from "axios";
import { browserHistory } from "../browserHistory";
import { AuthToken } from "../authtoken";


const texts = {
    unauthenticatedError: "Sua sessão expirou. Por favor, faça login novamente.",
};

export const api = axios.create({
    baseURL: "http://localhost:8080",
});

api.interceptors.request.use((config) => {
    const token = AuthToken.get();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const status: number = error.request.status;
        if (status === 401) {
            AuthToken.remove();
            alert(texts.unauthenticatedError);
            browserHistory.push("/");
        }
    });
