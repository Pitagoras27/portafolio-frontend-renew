import { Box } from '@mui/material';
import { useState } from 'react';
import { AboutMe, CarouselSkills, ContactFooter, Projects, TechnologySkills } from "../";
import { useScrollDirection } from '../../hooks';
import { FloatingActionButton, Footer, ModalContact, NavigationBar } from "../../ui";

export const PortafolioPage = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const direction = useScrollDirection();

  return (
    <>
      <NavigationBar />
      <Box sx={{ position: 'relative', top: '64px' }}>
        <CarouselSkills handleOpen={handleOpen} />
        <AboutMe direction={direction} />
        <TechnologySkills direction={direction} />
        <Projects direction={direction} />
        <ContactFooter direction={direction} />
        <Footer direction={direction} />
        <FloatingActionButton />
      </Box>
      <ModalContact
        open={open}
        handleClose={handleClose}
      />
    </>

  )
}
