import { useDispatch, useSelector } from "react-redux";
import { targetReachedByScroll } from "../store";

export const useAnimatedStore = () => {
  const dispatch = useDispatch();
  const { animatedClass, animatedSection } = useSelector((state) => state.animated);

  const startAnimated = (section) => {
    dispatch( targetReachedByScroll(section) );
  }

  return {
    animatedClass,
    animatedSection,
    startAnimated
  }
}