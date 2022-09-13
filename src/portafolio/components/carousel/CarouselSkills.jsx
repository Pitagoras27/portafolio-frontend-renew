import { makeStyles } from '@mui/styles';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import devSft1 from '../../../assets/imgs/carousel/devSft.jpg';
import devSft2 from '../../../assets/imgs/carousel/sftDev.png';
import devSft3 from '../../../assets/imgs/carousel/sftDev2.png';
import { CarouselItem } from './CarouselItem';

const useStyles = makeStyles({
  testClass: {
    backgroundColor: 'red'
  }
})

const bgImages = [devSft1, devSft2, devSft3];

export const CarouselSkills = ({ handleOpen }) => {
  const classes = useStyles();
  var items = [
    {
      name: "Programming",
      description: "Soy un web developer apasionado con lo que hago, diseño, programo y continuamente estoy evolucionando"
    },
    {
      name: "Design Interfaces",
      description: "Una de mis grandes sentirme orgulloso de mi trabajo, un reto dificil ante tanto tanlento y mejora entre mis colegas"
    },
    {
      name: "Growing Continuos",
      description: "Busco afanosamente todo lo que signifique la mejora continua de mi propia persona, ya que si no pudiera tenerme de mi lado, nada puedira lograr con satisfacción"
    }
  ]

    {/* // TODO: Remove autoPlay PROP is default */}
    return (
      <Carousel
        next={ (next, active) => console.log(``) }
        prev={ (prev, active) => console.log(``) }
        fullHeightHover={true}
        animation='fade'
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
          items.map( (item, i) => (
            <CarouselItem
              key={i}
              item={item}
              image={bgImages[i]}
              handleOpen={handleOpen}
            />
          ) )
        }
      </Carousel>
    )
}
