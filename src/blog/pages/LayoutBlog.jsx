import { FloatingActionButton, Footer, NavigationBar } from "../../ui";

export const LayoutBlog = ({ children }) => {
  return (
    <>
      <NavigationBar />
        { children }
      <FloatingActionButton />
      <Footer />
    </>
    
  )
}