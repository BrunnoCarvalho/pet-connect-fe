import { api } from "../../../shared/api/axiosInstance"

export async function refreshRequest(refreshToken) {
    const response = await api.post("/refresh", { refreshToken });
    console.log("meu novo access Token " + response)
    return response.data;    
}