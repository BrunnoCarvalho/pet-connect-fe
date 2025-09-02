import axios from "axios"

export async function signInRequest(email, password) {
    const response = await axios.post(`http://localhost:3000/login` , {
        user: { email, password }
    });
    return response.data;    
}




