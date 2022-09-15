import { useState } from 'react';
import { CarouselSkills } from "../";
import { ModalContact, NavigationBar } from "../../ui";

export const PortafolioPage = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <NavigationBar />
      <CarouselSkills handleOpen={handleOpen} />

      <ModalContact
        open={open}
        handleClose={handleClose}
      />
    </>

  )
}
