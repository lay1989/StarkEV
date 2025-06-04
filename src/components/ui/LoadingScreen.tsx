import React, { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';
import { useBootSequence } from '../../context/BootSequenceContext';

const LoadingScreen: React.FC = () => {
  const { bootProgress } = useBootSequence();
  const [loadingText, setLoadingText] = useState('Initializing systems');

  useEffect(() => {
    const texts = [
      'Initializing systems',
      'Connecting to Stark servers',
      'Loading vehicle schematics',
      'Calibrating arc reactor',
      'Establishing secure connection',
      'Booting J.A.R.V.I.S. interface',
    ];
    
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * texts.length);
      setLoadingText(texts[randomIndex]);
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);

  const bootProgressMessages = [
    { threshold: 20, message: 'POWER SYSTEMS: ONLINE' },
    { threshold: 40, message: 'PROPULSION: CALIBRATED' },
    { threshold: 60, message: 'NAVIGATION: INITIALIZED' },
    { threshold: 80, message: 'J.A.R.V.I.S.: ACTIVATED' },
    { threshold: 100, message: 'SYSTEM READY' },
  ];

  const getVisibleMessages = () => {
    return bootProgressMessages.filter(item => bootProgress >= item.threshold);
  };

  return (
    <div className="fixed inset-0 bg-space-black flex flex-col items-center justify-center z-50">
      <div className="max-w-md w-full px-4">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Zap className="text-electric-blue w-16 h-16" />
            <div className="absolute inset-0 bg-electric-blue/20 rounded-full animate-pulse-glow"></div>
          </div>
        </div>
        
        <div className="mb-8 text-center">
          <h1 className="font-stark text-2xl mb-2 text-electric-blue">STARK INDUSTRIES</h1>
          <p className="text-reactor-white/70 font-tech text-sm">{loadingText}...</p>
        </div>
        
        <div className="relative h-2 bg-dark-blue rounded-full mb-8 overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-electric-blue"
            style={{ width: `${bootProgress}%` }}
          ></div>
        </div>
        
        <div className="font-tech text-sm space-y-2">
          {getVisibleMessages().map((item, index) => (
            <div key={index} className="flex items-center text-electric-blue">
              <span className="mr-2">{'>'}</span>
              <span>{item.message}</span>
            </div>
          ))}
        </div>

        {/* Arc reactor animation */}
        <div className="mt-12 flex justify-center">
          <div className="relative">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#051A2F"
                strokeWidth="8"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#0084FF"
                strokeWidth="8"
                strokeDasharray="283"
                strokeDashoffset={283 - (bootProgress / 100) * 283}
                className="transition-all duration-300 ease-out"
                transform="rotate(-90 50 50)"
              />
              <circle
                cx="50"
                cy="50"
                r="20"
                fill="#0084FF"
                className="animate-pulse-glow"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-reactor-white font-tech text-xs">{Math.round(bootProgress)}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;