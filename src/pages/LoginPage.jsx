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
        console.log(`Guarda o token do usuário por um tempo. IsRemember: ${token}`)
    }

    return (
        <div className="loginContainer">
            <section id="leftSection">
                <header>
                  <h1>Bem-vindo</h1>
                  <p>Encontre seu melhor amigo aqui</p>
                </header>
                <div id="imgContainer">
                  <img src="src/assets/images/login.png" alt="Imagem background tela de login"/>
                </div>
            </section>
            <section id="rightSection">
                <header>
                  <h1>Login</h1>
                </header>
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
                    <div className="divBoxHelper">
                      <label>
                          <input
                              type="checkbox"
                              checked={isRememberMeActive}
                              className="checkboxClass"
                              onChange={(e) => setRemember(e.target.checked)}
                          />
                          Lembre de mim
                      </label>
                      <button
                          type="button"
                          className="withoutDecorationClass"
                          onClick={handleNavigateToForgotPassword}>
                          Esqueceu a senha?
                      </button>
                    </div>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                    <div className="divBoxHelper02">
                      <button 
                          id="loginButton"
                          type="submit">
                          Entrar
                      </button><br/>
                    </div>
                    <div className="divBoxHelper">
                      <label>Não tem uma conta?</label> 
                      <button 
                          type="button"
                          className="withoutDecorationClass"
                          onClick={handleNavigateToRegister}>
                          Cadastre-se
                      </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default LoginPage  