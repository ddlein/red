import ToggleSwitch from './ToggleSwitch';
import  useToggles  from '../services/useToggles';

const switchName = 'theme'

const ThemeToggle = () => {
  const { checkActiveToggles, toggleSwitch } = useToggles();
  const handleClick = () => toggleSwitch(switchName);

  return (
    <ToggleSwitch
      isActive={checkActiveToggles(switchName)}
      onToggle={handleClick}
    >
      Тема
    </ToggleSwitch>
  );
};

export default ThemeToggle;
