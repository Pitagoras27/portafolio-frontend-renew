import { Box, Container } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
// import { animationType } from '../../../helpers';
import { useAnimatedStore, useSectionOnScreen } from "../../../hooks";
import { Contact, HeaderSection, LayoutContact } from "../../../ui";

export const ContactFooter = React.memo(({ direction }) => {

  const { fadeInUp, animatedSection, clearVisibleSection, startAnimated } = useAnimatedStore();
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
      startAnimated('contact');
    }
  }, [isVisible])

  const onSectionVisible = (section) => animatedSection.find((item) => item === section);

  const animationType = useMemo(() => {
    if (isVisible) {
      return direction === 'up' ? 'animate__fadeInDown' : 'animate__fadeInUp'
    }
    }, [isVisible]
  );

  return (
    <Box
      ref={containerRef}
      sx={{
        backgroundColor: 'white',
        width: '100%',
        paddingBottom: '90px'
      }}
    >
      <Container
        maxWidth="sm"
        className={ `animate__animated ${onSectionVisible('contact') ? animationType : 'hideSection'}`}
      >
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
})