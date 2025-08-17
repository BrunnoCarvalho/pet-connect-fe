import { useState } from "react"
import "./LoginPage.css"

function LoginPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isRememberMeActive, setRemember] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()    
        if (!email.includes("@")) {
            setError("E-mail inválido. Favor digitar um e-mail válido")
            return
        } 
        if (password.length < 8) {
            setError("A senha deve ter pelo menos 8 caracteres")
            return
        } 
        console.log(isRememberMeActive)
        if (isRememberMeActive) {
            console.log(isRememberMeActive)
            setRememberLogin("TOKEN")
        } 
        setError("")
    }

    function handleNavigateToForgotPassword() {
        console.log("Chama ForgotPasswordPage")
    }

    function handleNavigateToRegister() {
        console.log("Chama RegisterPage")
    }

    function setRememberLogin(token) {
        console.log(`Guarda o token do usuário por um tempo. IsRemember: ${isRememberMeActive}`)
    }

    return (
        <div className="loginContainer">
            <div id="part1">
                <img src="/../assets/images/login.png" alt="Imagem background tela de login"/>
            </div>
            <div id="part2">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    /><br/>
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    /><br/>
                    <label>
                        <input
                            type="checkbox"
                            checked={isRememberMeActive}
                            onChange={(e) => setRemember(e.target.checked)}
                        />
                        Lembre de mim
                    </label>
                    <button
                        type="button"
                        onClick={handleNavigateToForgotPassword}>
                        Esqueci minha senha
                    </button><br/>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                    <button 
                        type="submit">
                        Entrar
                    </button><br/>
                    <label>Não tem uma conta?</label> 
                    <button 
                        type="button"
                        onClick={handleNavigateToRegister}>
                        Cadastre-se
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage