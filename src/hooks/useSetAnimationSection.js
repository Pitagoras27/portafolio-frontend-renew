import { useEffect, useMemo } from "react";
import { useAnimatedStore, useSectionOnScreen } from "./";

export const useSetAnimationSection = (options, direction, animatedSection, sectionPage) => {
  const [ containerRef, isVisible ] = useSectionOnScreen(options);
  const { clearVisibleSection, startAnimated } = useAnimatedStore();

  const onSectionVisible = (section) => animatedSection.find((item) => item === section);

  useEffect(() => {
    if(!isVisible) {
      clearVisibleSection(sectionPage);
    } else {
      startAnimated(sectionPage);
    }
  }, [isVisible])

  const animationType = useMemo(() => {
    if (isVisible) {
      return direction === 'up' ? 'animate__fadeInDown' : 'animate__fadeInUp'
    }
    }, [isVisible]
  );

  return {
    containerRef,
    animationType,
    onSectionVisible: onSectionVisible(sectionPage)
  }
}