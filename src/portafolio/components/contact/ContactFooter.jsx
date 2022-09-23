import { Box, Container } from "@mui/material";
import { useAnimatedStore } from "../../../hooks";
import { Contact, HeaderSection, LayoutContact } from "../../../ui";

export const ContactFooter = () => {
  const { animatedClass, animatedSection } = useAnimatedStore();
  return (
    <Box sx={{
        backgroundColor: 'white',
        width: '100%',
        paddingBottom: '50px'
      }}
    >
      <Container maxWidth="sm" className={ animatedSection === 'contact' ? animatedClass : 'hideSection'}>
        <HeaderSection headerTitle="Contact" idScroll="contact" />
        <LayoutContact
          mainTitle='Write a Message' 
          subtitle={['I\'m interested in all type of opportunities that make me grow professionally', <br/>,
          'Take a moment and write me your interests']}
        >
          <Contact />
        </LayoutContact>
      </Container>
    </Box>
  )
}