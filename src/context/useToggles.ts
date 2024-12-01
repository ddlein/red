import { useContext } from 'react';
import TogglesContext from './TogglesContext';

const useToggles = () => {
  const context = useContext(TogglesContext);
  if (!context) {
    throw new Error('useToggles must be used within a TogglesProvider');
  }
  return context;
};

export default useToggles;
