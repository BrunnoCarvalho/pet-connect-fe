import { AuthProvider } from "../features/auth/model/auth"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./router/ProtectedRoute";
import Tutor from "../pages/tutor/Tutor";
import Ong from "../pages/ong/ong";
import Clinica from "../pages/clinica/Clinica";
import LoginPage from "../pages/login/loginPage";
import PasswordRecoveryPage from "../features/passwordRecovery/ui/PasswordRecoveryForm";


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/password-recovery" element={<PasswordRecoveryPage />} />
            
            <Route element={<ProtectedRoute />}>
                <Route path="/tutor" element={<Tutor />} />
                <Route path="/clinica" element={<Clinica />} />
                <Route path="/ong" element={<Ong />} />
            </Route>
          </Routes>        
        </BrowserRouter>
      </AuthProvider>

    </>
  )
}

export default App
