import axios from "axios";

/**
 * Instância Axios configurada para comunicação com a API do sistema.
 *
 * @type {import('axios').AxiosInstance}
 */

export const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
})