import React from 'react';
import Carousel from 'react-material-ui-carousel';
import devSft1 from '../../../assets/imgs/carousel/devSft.jpg';
import devSft2 from '../../../assets/imgs/carousel/sftDev.png';
import devSft3 from '../../../assets/imgs/carousel/sftDev2.png';
import { carouselData } from '../../../data';
import { CarouselItem } from './CarouselItem';

const bgImages = [devSft1, devSft2, devSft3];

export const CarouselSkills = ({ handleOpen }) => {
    {/* // TODO: Remove autoPlay PROP is default */}
    return (
      <Carousel
        next={ (next, active) => console.log(``) }
        prev={ (prev, active) => console.log(``) }
        fullHeightHover={true}
        animation='fade'
        indicators={false}
        autoPlay={false}
        navButtonsProps={{
          style: { backgroundColor: "cornflowerblue", width: '50px', height: '50px'}
        }}
        indicatorContainerProps={{
          style: {
            marginTop: '35px',
            marginLeft: '20px'
          }
        }}
      >
        {
          carouselData.map( (item, i) => (
            <CarouselItem
              key={i}
              type={i}
              item={item}
              image={bgImages[i]}
              handleOpen={handleOpen}
            />
          ) )
        }
      </Carousel>
    )
}
