import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../auth";
import { useAuthStore } from "../hooks";
import { PortafolioPage } from "../portafolio";
import { Loader } from "../ui/components/Loader";

export const RouterApp = () => {
  const { status, startCheckingToken } = useAuthStore();
  
  useEffect(() => {
    startCheckingToken();
  }, []);


  if(status === 'checking') {
    return <Loader />
  }

  return (
    <Routes>
      {
        status === 'non-authenticated' ?
        (
          <>          
            <Route path="/auth/login" element={ <LoginPage /> } />
            <Route path="/auth/register" element={ <RegisterPage /> } />
            <Route path="/auth/*" element={ <Navigate to="/auth/login" /> } />
            <Route path="/*" element={ <Navigate to="/auth/login" /> } />
          </>

        ) : 
        (
          <>
            <Route path="/" element={ <PortafolioPage /> } />
            <Route path="/*" element={ <Navigate to="/" /> } />
          </>
        )
      }
      {/* <Route path="/" element={<PortafolioPage /> } /> */}
      {/* <Route path="/*" element={<Navigate to="/auth/login" />} /> */}
    </Routes>    
  )
}