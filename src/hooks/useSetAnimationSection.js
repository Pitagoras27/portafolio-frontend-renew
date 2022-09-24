import { useEffect, useState } from "react";
import { useScrollDirection } from "./useScrollDirection";

export const useSetAnimationSection = () => {
  const [direction, setDirection] = useState('');

  useEffect(() => {
    setDirection(useScrollDirection());
  }, []);

  return direction
}