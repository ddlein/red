type ToggleSwitchProps = {
  isActive: boolean;
  onToggle: () => void;
  children: string;
};

const ToggleSwitch = ({ isActive, onToggle, children }: ToggleSwitchProps) => {
  return (
    <div className="toggle-switch-container">
      <label className="toggle-switch">
        <input type="checkbox" checked={isActive} onChange={onToggle} />
        <span className="slider"/>
      </label>
      <span className="label">{children}</span>
    </div>
  );
};

export default ToggleSwitch;
