import ThemeToggle from "./components/ThemeToggle";
import MusicToggle from "./components/MusicToggle";
import InvertToggle from "./components/InvertToggle";
import { TogglesProvider } from "./context/TogglesContext.tsx";
import "./styles/index.scss";
import useToggles from "./context/useToggles.ts";
import { useEffect } from "react";

const AppContent = () => {
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

  return (
    <div className="app">
      <div className="toggles">
        <ThemeToggle />
        <MusicToggle />
        <InvertToggle />
      </div>
    </div>
  );
};

const App = () => (
  <TogglesProvider>
    <AppContent />
  </TogglesProvider>
);

export default App;
