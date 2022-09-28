import { Footer, NavigationBar } from "../../ui";

export const LayoutBlog = ({ children }) => {
  return (
    <>
      <NavigationBar />
        { children }
      <Footer />
    </>
    
  )
}