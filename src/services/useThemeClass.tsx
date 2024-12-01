import { useEffect } from "react";
import useToggles from "./useToggles.ts";

export const useThemeClass = () => {
  const { checkActiveToggles } = useToggles();

  const isInverted = checkActiveToggles("invert");
  const isThemeActive = checkActiveToggles("theme");

  const themeClass = isInverted
    ? isThemeActive
      ? "light-theme"
      : "dark-theme"
    : isThemeActive
    ? "dark-theme"
    : "light-theme";

  useEffect(() => {
    document.body.classList.add(themeClass);
    return () => {
      document.body.classList.remove(themeClass);
    };
  }, [themeClass]);

  return themeClass;
};
