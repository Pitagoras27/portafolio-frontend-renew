import { Box } from '@mui/material';
import { useState } from 'react';
import { AboutMe, CarouselSkills, Contact, Projects, TechnologySkills } from "../";
import { FloatingActionButton, Footer, ModalContact, NavigationBar } from "../../ui";

export const PortafolioPage = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <NavigationBar />
      <Box sx={{ position: 'relative', top: '64px' }}>
        <CarouselSkills handleOpen={handleOpen} />
        <TechnologySkills />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
        <FloatingActionButton />
      </Box>
      <ModalContact
        open={open}
        handleClose={handleClose}
      />
    </>

  )
}
