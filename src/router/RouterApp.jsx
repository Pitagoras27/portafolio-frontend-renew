import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../auth/pages";
import { useAuthStore } from "../hooks/useAuthStore";
import { PortafolioPage } from "../portafolio/pages";


export const RouterApp = () => {
  const { status, startLoginUser } = useAuthStore();

  return (
    <Routes>
      {
        status === 'checking' ?
        (
          <>          
            <Route path="/auth/login" element={ <LoginPage /> } />
            <Route path="/auth/register" element={ <RegisterPage /> } />
            <Route path="/auth/*" element={<Navigate to="/auth/login" /> } />
          </>

        ) : 
        (
          <Route path="/" element={<PortafolioPage /> } />
        )
        }
      {/* <Route path="/" element={<PortafolioPage /> } /> */}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>    
  )
}