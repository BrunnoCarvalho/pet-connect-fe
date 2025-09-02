import { useAuth } from "../auth";
import { refreshRequest } from "../../api/refreshTokenRequest";

export function useRefreshToken() {
  const { setToken } = useAuth(); 
  
  const refresh = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken")
      if (!refreshToken){
        throw new Error("Refresh token não encontrado")
      }
      const { token } = await refreshRequest(refreshToken);
      setToken(token);
      localStorage.setItem("token", token);
      return token;
    } catch (err) {
      console.error("Erro ao renovar token", err);
      return null;
    }
  };

  return refresh;
}
