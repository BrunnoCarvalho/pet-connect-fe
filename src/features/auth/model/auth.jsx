import { createContext, useContext, useState, useMemo, useEffect } from "react";
import { signInRequest } from "../api/signInRequest";


const AuthContext = createContext(null)

export function AuthProvider ({ children }){

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [token, setToken] = useState(null)

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        const savedUser = localStorage.getItem("user");

        if (savedToken) {
            setToken(savedToken);
        }
        if (savedUser) {
            setUser(JSON.parse(savedUser))
        }

        setLoading(false);
    },[])


    const login = async (email, password) => {
        try {
            const { user, token, refreshToken } = await signInRequest(email, password);
            setUser(user);
            setToken(token);
            localStorage.setItem("token", token);
            localStorage.setItem("refreshToken", refreshToken)
            localStorage.setItem("user", JSON.stringify(user))
            return user;
        } catch (error) {
            console.log(`Erro durante o login: ${error}`);
            return false;
        } 
    };
    const logout = () => {
        setUser(null)
        setToken(null)
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user")
    }

    const value = useMemo(() => ({ user, token, loading, login, logout, setToken }), [user, token, loading])

    return (
        <AuthContext.Provider value={ value }>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const ctx = useContext(AuthContext)
    if(!ctx) {
        throw new Error("useAuth deve ser usado dentro de <AuthProvider>")
    }
    return ctx;
}