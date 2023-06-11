import axios from "axios";
import { browserHistory } from "../browserHistory";
import { AuthToken } from "../authtoken";
import { User } from "../types";
import { useGlobalStore } from "../useGlobalStore";

type UploadUserPicture = {
    userPicture: string;
};

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

export const uploadUserPictureApi = async (picture: File): Promise<UploadUserPicture> => {
    const formData = new FormData();
    formData.append("file", picture);
    const response = await api.post("users/upload-picture", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }) as any;
    

    return { userPicture : response.data.pictureUrl };
}

export function logout() {
    AuthToken.remove();
    browserHistory.push("/");
  }

