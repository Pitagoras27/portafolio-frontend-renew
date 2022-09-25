import { useDispatch, useSelector } from "react-redux";
import { clearSectionName, targetReachedByScroll } from "../store";

export const useAnimatedStore = () => {
  const dispatch = useDispatch();
  const { animatedSection } = useSelector((state) => state.animated);

  const startAnimated = (section) => {
    dispatch( targetReachedByScroll(section) );
  }

  const clearVisibleSection = (sectionToClean) => {
    dispatch(clearSectionName(sectionToClean));
  }

  return {
    animatedSection,
    startAnimated,
    clearVisibleSection
  }
}