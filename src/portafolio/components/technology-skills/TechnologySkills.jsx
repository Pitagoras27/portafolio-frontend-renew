import { Box, Container, Grid, Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link as LinkScroll } from "react-scroll";
import { useAnimatedStore, useSetAnimationSection } from '../../../hooks';
import { HeaderSection } from '../../../ui';
import { SliderSkills } from './SliderSkills';

const section = 'skills';

export const TechnologySkills = React.memo(({ direction }) => {
  const [heightEl, setHeightEl] = useState('0');
  const { animatedSection, clearVisibleSection, startAnimated } = useAnimatedStore();

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
        width: '100%'
      }}
    >
      <Container
        maxWidth="lg"
        className={ `animate__animated ${onSectionVisible ? animationType : 'hideSection'}`}
      >
        <Grid container>
          <Grid item xs={12}>
          <HeaderSection headerTitle="Skills" idScroll={section} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph align="left">
              I started as a webmaster, my main interest was a design UI interfaces and graphs, but the way or fate, got me here develop UI interfaces and doing every time of things related with web, that is a very huge and interesant. I’ve done remote work for colleagues,  and collaborated with very talented people to create web products for both business and consumer use.
            </Typography>

            <Typography variant="body1" paragraph align="left">
              I create successful websites and webapps, always with colleagues and coworkers. Always improve my work and upgrade as a person, my focuses is built software with best practices and performance, resposive and usefull. The main area of my expertise is front-end development, but also I have work as a Fullstack developer with CMS wordpress, brighspot and customs systems.
            </Typography>

            <Typography variant="body1" paragraph align="left">
              Actually my interest is reforce my design skills in CSS and improve my comunication skills. 
            </Typography>

            <Typography variant="body1" paragraph align="left">
              Visit me in my {'\n'}
              <Link
                color="secondary"
                href="https://www.linkedin.com/in/carlos-guti%C3%A9rrez-39ab891a6/"
                sx={{ textDecoration: 'none', fontWeight: '700'}}
              >
                Linkedin
              </Link> profile or {'\n'}
              <LinkScroll
                activeClass="active"
                to="contact"
                duration={500}
              >
                <Typography
                  color='secondary'
                  variant='subtitle1'
                  component='span'
                  sx={{ fontWeight: '700', cursor: 'pointer'}}
                >
                  get in touch!
                </Typography>
              </LinkScroll>
            </Typography>
          </Grid>

          <Grid item
            xs={12}
            md={6}
            justifyContent="flex-end"
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <SliderSkills areaSkill="Frontend" level={70}/>
            <SliderSkills areaSkill="React" level={55}/>
            <SliderSkills areaSkill="Design" level={45}/>
            <SliderSkills areaSkill="Backend" level={40} />
            <SliderSkills areaSkill="Typescript" level={35}/>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
})

