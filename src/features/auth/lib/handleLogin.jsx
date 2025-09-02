export async function handleLogin ({
    email,
    password,
    setError,
    authLogin
}) 
{
    if (!email.includes("@")) {
        setError("E-mail inválido. Favor digitar um e-mail válido")
        return false
    } 

    const user = await authLogin(email, password);

    if(!user){
        setError("Login inválido");
        return false
    }

    setError("")
    return user
}