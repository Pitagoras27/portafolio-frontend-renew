import { useState } from 'react';
import { AboutMe, CarouselSkills, TechnologySkills } from "../";
import { Footer, ModalContact, NavigationBar } from "../../ui";

export const PortafolioPage = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <NavigationBar />
      <CarouselSkills handleOpen={handleOpen} />

      <TechnologySkills />
      <AboutMe />

      <Footer />
      <ModalContact
        open={open}
        handleClose={handleClose}
      />
    </>

  )
}
