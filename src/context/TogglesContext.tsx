import { createContext, ReactNode, useState } from "react";

export type Toggle = "theme" | "music" | "invert";

export type TogglesContextType = {
  toggleSwitch: (toggle: Toggle) => void;
  checkActiveToggles: (param: Toggle) => boolean;
};

const TogglesContext = createContext<TogglesContextType | undefined>(undefined);

export const TogglesProvider = ({ children }: { children: ReactNode }) => {
  const [activeToggles, setActiveToggles] = useState<Toggle[]>([]);

  const toggleSwitch = (toggle: Toggle) => {
    setActiveToggles((prev) => {
      if (prev.includes(toggle)) {
        return prev.filter((t) => t !== toggle);
      }
      if (prev.length === 2) {
        return [prev[1], toggle];
      }
      return [...prev, toggle];
    });
  };

  const checkActiveToggles = (param: Toggle) => activeToggles.includes(param);

  return (
    <TogglesContext.Provider value={{ checkActiveToggles, toggleSwitch }}>
      {children}
    </TogglesContext.Provider>
  );
};

export default TogglesContext;
