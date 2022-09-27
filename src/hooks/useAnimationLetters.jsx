import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {
    animationTransition: {
      // color: (props) => props.color,
      '& span:nth-of-type(1)': {
        color: 'gray !important'
      }
    }
  }
});

export const useAnimationLetters = ({ headerTitle }) => {
  const allLetters = headerTitle.split('');
  const classes = useStyles({
    color: 'green'
  });


  const Component = ({ children, index, classes }) => {
    
    return <span className={`animate__animated custom_${index} ${classes}`}>{ children }</span>
  }

  const animationLetter = allLetters.map((letter, index) => (
    <Component
      key={`${letter}_${index}`}
      index={index}
      classes={classes.animationTransition}
    >
      {letter}
    </Component>)
  )

  return {
    lettersColection : animationLetter
  }
}
