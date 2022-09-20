import { Box } from '@mui/material';
import { useState } from 'react';
import { AboutMe, CarouselSkills, Projects, TechnologySkills } from "../";
import { Footer, ModalContact, NavigationBar } from "../../ui";

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
        <Footer />
      </Box>
      <ModalContact
        open={open}
        handleClose={handleClose}
      />
    </>

  )
}
