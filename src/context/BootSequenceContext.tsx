import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface BootSequenceContextType {
  isBooted: boolean;
  bootProgress: number;
  initializeSystem: () => void;
}

const BootSequenceContext = createContext<BootSequenceContextType>({
  isBooted: false,
  bootProgress: 0,
  initializeSystem: () => {},
});

export const useBootSequence = () => useContext(BootSequenceContext);

interface BootSequenceProviderProps {
  children: ReactNode;
}

export const BootSequenceProvider: React.FC<BootSequenceProviderProps> = ({ children }) => {
  const [isBooted, setIsBooted] = useState(false);
  const [bootProgress, setBootProgress] = useState(0);

  const initializeSystem = () => {
    setBootProgress(0);
    
    const bootInterval = setInterval(() => {
      setBootProgress(prev => {
        const newProgress = prev + Math.random() * 5;
        
        if (newProgress >= 100) {
          clearInterval(bootInterval);
          setTimeout(() => setIsBooted(true), 500);
          return 100;
        }
        
        return newProgress;
      });
    }, 100);

    return () => clearInterval(bootInterval);
  };

  useEffect(() => {
    initializeSystem();
  }, []);

  return (
    <BootSequenceContext.Provider value={{ isBooted, bootProgress, initializeSystem }}>
      {children}
    </BootSequenceContext.Provider>
  );
};