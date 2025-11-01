import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../features/auth/model/auth";
import PasswordRecoveryPage from "../features/passwordRecovery/ui/PasswordRecoveryForm";
import Clinica from "../pages/clinica/Clinica";
import LoginPage from "../pages/login/loginPage";
import { UserTypeSelectionPage } from "../pages/Modal/UserTypeSelectionPage";
import Ong from "../pages/ong/ong";
import Tutor from "../pages/tutor/Tutor";
import { ProtectedRoute } from "./router/ProtectedRoute";

import { RegisterPage } from "../pages/RegisterPage/register";
function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/password-recovery" element={<PasswordRecoveryPage />} />
            <Route path ="/modal" element = {<UserTypeSelectionPage />} />
            <Route path = "/register" element = {<RegisterPage/>} />
            
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

export default App;