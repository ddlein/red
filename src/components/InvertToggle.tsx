import ToggleSwitch from './ToggleSwitch';
import useToggles from '../context/useToggles';

const switchName = 'invert'

const InvertToggle = () => {
  const { checkActiveToggles, toggleSwitch } = useToggles();
  const handleClick = () => toggleSwitch(switchName);

  return (
    <ToggleSwitch
      isActive={checkActiveToggles(switchName)}
      onToggle={handleClick}
    >
      Инверсия
    </ToggleSwitch>
  );
};

export default InvertToggle;
