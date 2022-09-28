import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../auth";
import { BlogDetailPage, BlogPage } from "../blog";
import { useAuthStore } from "../hooks";
import { PortafolioPage } from "../portafolio";
import { Loader } from "../ui/components/Loader";
import { UserSettings } from "../userSettings";

export const RouterApp = () => {
  const { status, user, startCheckingToken } = useAuthStore();
  
  useEffect(() => {
    startCheckingToken();
  }, []);

  if(status === 'checking') {
    return <Loader />
  }

  return (
    <Routes>
      <>
        {
          status === 'non-authenticated' && (
            <>
              <Route path="/auth/login" element={ <LoginPage /> } />
              <Route path="/auth/register" element={ <RegisterPage /> } />
              <Route path="/auth/*" element={ <Navigate to="/auth/login" /> } />
              <Route path="/" element={ <PortafolioPage /> } />
              <Route path="/*" element={ <Navigate to="/" /> } />
              <Route path="/blog" element={ <BlogPage /> } />
              <Route path="/blog/:section/:title/:id" element={ <BlogDetailPage /> } />
            </>
          )
        }

        {/*
          // TODO: 
        */}
        {
          status === 'authenticated' && (
            <>
              {/* <Route path="/*" element={ <Navigate to="/settings" /> } /> */}
              <Route path={`/settings`} element={ <UserSettings /> } />

              <Route path="/" element={ <PortafolioPage /> } />
              <Route path="/*" element={ <Navigate to="/" /> } />
              <Route path="/blog" element={ <BlogPage /> } />
              <Route path="/blog/:section/:title/:id" element={ <BlogDetailPage /> } />
            </>
          )
        }
      </>
    </Routes>    
  )
}