import ThemeToggle from "./components/ThemeToggle";
import MusicToggle from "./components/MusicToggle";
import InvertToggle from "./components/InvertToggle";
import { TogglesProvider } from "./context/TogglesContext.tsx";
import "./styles/index.scss";
import { useThemeClass } from "./services/useThemeClass.tsx";

const AppContent = () => {
  useThemeClass()

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
