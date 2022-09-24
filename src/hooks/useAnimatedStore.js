import { useDispatch, useSelector } from "react-redux";
import { clearSectionName, targetReachedByScroll } from "../store";

export const useAnimatedStore = () => {
  const dispatch = useDispatch();
  const { fadeInUp, fadeInDown, animatedSection } = useSelector((state) => state.animated);

  const startAnimated = (section) => {
    dispatch( targetReachedByScroll(section) );
  }

  const clearVisibleSection = (sectionToClean) => {
    dispatch(clearSectionName(sectionToClean));
  }

  return {
    fadeInDown,
    fadeInUp,
    animatedSection,
    startAnimated,
    clearVisibleSection
  }
}