import { useEffect } from "react";
import { useAuth } from "../auth";
import { useRefreshToken } from "./useRefreshToken";
import { axiosPrivate } from "../../../../shared/api/axiosPrivate";

export default function useAxiosPrivate() {

    const refresh = useRefreshToken();
    const { token } = useAuth();
    
    useEffect(() => {
        
        const requestIntercept = axiosPrivate.interceptors.request.use(
            (config) => {
                if (!config.headers["Authorization"]) {
                    config.headers["Authorization"] = `Bearer ${token}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );
        
        const responseIntercept = axiosPrivate.interceptors.response.use(
            (response) => response,
            async (error) => {
                const prevRequest = error?.config;

                if (!prevRequest.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();

                    if (newAccessToken) {
                        prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                        return axiosPrivate(prevRequest);
                    }
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(requestIntercept);
        };
    }, [token, refresh]);
    
    return axiosPrivate;
}

