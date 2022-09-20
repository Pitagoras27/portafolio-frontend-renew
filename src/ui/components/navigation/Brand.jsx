import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const useStyles = makeStyles({
  blast: {
    opacity: 0,
    display: 'inline-block',
    '-webkitTransition': 'all 0.3s ease-out',
    '-oTransition': 'all 0.3s ease-out',
    transition: 'all 0.3s ease-out'
  },
  effectLetter: {
    '& span': {
      opacity: 1
    }
  }
})

export const Brand = ({ mobileDisplay, deskDisplay, deviceAligment }) => {
  const classes = useStyles();
  const [ onHovering1, setOnHovering1 ] = useState(false);
  const [ onHovering2, setOnHovering2 ] = useState(false);
  const [ onHovering3, setOnHovering3 ] = useState(false);
  const [ onHovering4, setOnHovering4 ] = useState(false);
  const [ onHovering5, setOnHovering5 ] = useState(false);
  const [ onHovering6, setOnHovering6 ] = useState(false);
  const [ onHovering7, setOnHovering7 ] = useState(false);
  const [ onHovering8, setOnHovering8 ] = useState(false);
  const [ onHovering9, setOnHovering9 ] = useState(false);

  const onMouseOverElement1 = () => setOnHovering1(true);
  const onMouseLeaveElement1 = () => setOnHovering1(false);
  const onMouseOverElement2 = () => setOnHovering2(true);
  const onMouseLeaveElement2 = () => setOnHovering2(false);
  const onMouseOverElement3 = () => setOnHovering3(true);
  const onMouseLeaveElement3 = () => setOnHovering3(false);
  const onMouseOverElement4 = () => setOnHovering4(true);
  const onMouseLeaveElement4 = () => setOnHovering4(false);
  const onMouseOverElement5 = () => setOnHovering5(true);
  const onMouseLeaveElement5 = () => setOnHovering5(false);
  const onMouseOverElement6 = () => setOnHovering6(true);
  const onMouseLeaveElement6 = () => setOnHovering6(false);
  const onMouseOverElement7 = () => setOnHovering7(true);
  const onMouseLeaveElement7 = () => setOnHovering7(false);
  const onMouseOverElement8 = () => setOnHovering8(true);
  const onMouseLeaveElement8 = () => setOnHovering8(false);
  const onMouseOverElement9 = () => setOnHovering9(true);
  const onMouseLeaveElement9 = () => setOnHovering9(false);


  return (
    <>
      <Typography
        sx={{
          display: { xs: mobileDisplay, md: deskDisplay},
          mr: 1,
          fontSize: '1.5em'
        }} 
        component="span"
      >
        {`<`}
      </Typography>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        className={classes.effectLetter}
        sx={{
          display: { xs: mobileDisplay, md: deskDisplay },
          fontFamily: 'monospace',
          fontWeight: 700,
          color: 'inherit',
          textDecoration: 'none',
          '& span:nth-of-type(6n)': {
            marginRight: '10px'
          }
        }}
      >
        <span 
          className={`${classes.blast} ${onHovering1 ? "rubberBand animatedBrand" : ""}`}
          onMouseOver={onMouseOverElement1}
          onMouseOut={onMouseLeaveElement1}
        >
          C
        </span>
        <span 
          className={`${classes.blast} ${onHovering2 ? "rubberBand animatedBrand" : ""}`}
          onMouseOver={onMouseOverElement2}
          onMouseOut={onMouseLeaveElement2}
        >
          a
        </span>
        <span 
          className={`${classes.blast} ${onHovering3 ? "rubberBand animatedBrand" : ""}`}
          onMouseOver={onMouseOverElement3}
          onMouseOut={onMouseLeaveElement3}
        >
          r
        </span>
        <span 
          className={`${classes.blast} ${onHovering4 ? "rubberBand animatedBrand" : ""}`}
          onMouseOver={onMouseOverElement4}
          onMouseOut={onMouseLeaveElement4}
        >
          l
        </span>
        <span 
          className={`${classes.blast} ${onHovering5 ? "rubberBand animatedBrand" : ""}`}
          onMouseOver={onMouseOverElement5}
          onMouseOut={onMouseLeaveElement5}
        >
          o
        </span>
        <span 
          className={`${classes.blast} ${onHovering6 ? "rubberBand animatedBrand" : ""}`}
          onMouseOver={onMouseOverElement6}
          onMouseOut={onMouseLeaveElement6}
        >
          s
        </span>
        <span>{' '}</span>
        <span 
          className={`${classes.blast} ${onHovering7 ? "rubberBand animatedBrand" : ""}`}
          onMouseOver={onMouseOverElement7}
          onMouseOut={onMouseLeaveElement7}
        >
          D
        </span>
        <span 
          className={`${classes.blast} ${onHovering8 ? "rubberBand animatedBrand" : ""}`}
          onMouseOver={onMouseOverElement8}
          onMouseOut={onMouseLeaveElement8}
        >
          e
        </span>
        <span 
          className={`${classes.blast} ${onHovering9 ? "rubberBand animatedBrand" : ""}`}
          onMouseOver={onMouseOverElement9}
          onMouseOut={onMouseLeaveElement9}
        >
          v
        </span>
      </Typography>
      <Typography 
        sx={{ 
          display: { xs: mobileDisplay, md: deskDisplay},
          ml: 1,
          fontSize: '1.5em',
          flexGrow: deviceAligment,
          mr: 4
        }}
        component="span">
          {`/>`}
      </Typography>
    </>
  )
}