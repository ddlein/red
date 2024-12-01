import { ReactNode } from "react";

type ToggleSwitchProps = {
  isActive: boolean;
  onToggle: () => void;
  children: ReactNode;
  className?: string;
};

const ToggleSwitch = ({isActive,onToggle, className,  children}: ToggleSwitchProps) => {
  return (
    <div className={`toggle-switch-container ${className}`}>
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isActive}
          onChange={onToggle}
          aria-checked={isActive}
        />
        <span className="slider"/>
      </label>
      <span className="label">{children}</span>
    </div>
  );
};

export default ToggleSwitch;
