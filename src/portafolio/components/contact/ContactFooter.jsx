import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useAnimatedStore, useSectionOnScreen } from "../../../hooks";
import { Contact, HeaderSection, LayoutContact } from "../../../ui";

export const ContactFooter = () => {


  const { animatedClass, animatedSection, clearVisibleSection, startAnimated } = useAnimatedStore();
  const [heightEl, setHeightEl] = useState('0');
  const options = {
    root: null,
    rootMargin: `${heightEl}px`,
    threshold:1.0
  }
  
  const [ containerRef, isVisible ] = useSectionOnScreen(options);
  useEffect(() => {
    if (containerRef.current) {
      setHeightEl(containerRef.current.clientHeight)
    }
  }, []);
  
  useEffect(() => {
    if(!isVisible) {
      clearVisibleSection('contact');
    } else {
      // console.log('here is true animated should have show');
      startAnimated('contact');
    }
  }, [isVisible])

  // console.log('isVisible about',isVisible);

  const onSectionVisible = (section) => animatedSection.find((item) => item === section);




  return (
    <Box
      ref={containerRef}
      sx={{
        backgroundColor: 'white',
        width: '100%',
        paddingBottom: '50px'
      }}
    >
      <Container maxWidth="sm" className={ onSectionVisible('contact') ? animatedClass : 'hideSection'}>
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