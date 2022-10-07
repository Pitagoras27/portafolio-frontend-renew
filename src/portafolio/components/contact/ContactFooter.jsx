import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAnimatedStore, useSetAnimationSection } from "../../../hooks";
import { Contact, HeaderSection, LayoutContact } from "../../../ui";

const section = 'contact';

export const ContactFooter = React.memo(({ direction }) => {
  const [heightEl, setHeightEl] = useState('0');
  const { animatedSection } = useAnimatedStore();

  const options = {
    root: null,
    rootMargin: `${heightEl}px`,
    threshold:1.0
  }

  const { 
    containerRef,
    animationType,
    onSectionVisible 
  } = useSetAnimationSection(options, direction, animatedSection, section);

  useEffect(() => {
    let timer = () => {};

    if (containerRef.current) {
      // ? This timer allow read correct height
      timer = setTimeout(() => {
        setHeightEl(containerRef.current.clientHeight);
      }, 500)
    }

    return () => clearTimeout(timer);

  }, []);

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
        className={ `animate__animated ${onSectionVisible ? animationType : 'hideSection'}`}

      >
        <HeaderSection headerTitle="Contact" idScroll={section} />
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