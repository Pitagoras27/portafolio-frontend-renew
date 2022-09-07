import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages";
import { useAuthStore } from "../hooks/useAuthStore";
import { PortafolioPage } from "../portafolio/pages";


export const RouterApp = () => {
  const { status, startLoginUser } = useAuthStore();

  useEffect(() => {
    setTimeout(() => startLoginUser(), 3000)
  }, [])

  return (
    <Routes>
      {
        status === 'checking' ?
        (
          <>          
            <Route path="/auth/login" element={ <LoginPage /> } />
            <Route path="/auth/*" element={<Navigate to="/auth/login" /> } />
          </>

        ) : 
        (
          <Route path="/" element={<PortafolioPage /> } />
        )
        }
      <Route path="/" element={<PortafolioPage /> } />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>    
  )
}