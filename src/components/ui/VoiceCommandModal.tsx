import React, { useState, useEffect } from 'react';
import { X, Mic, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VoiceCommandModalProps {
  onClose: () => void;
}

const VoiceCommandModal: React.FC<VoiceCommandModalProps> = ({ onClose }) => {
  const [isListening, setIsListening] = useState(false);
  const [responseText, setResponseText] = useState('');
  const [animatedText, setAnimatedText] = useState('');
  const [commandIndex, setCommandIndex] = useState(0);

  const jarvisResponses = [
    "Welcome, sir. How may I assist you today?",
    "All systems are operating at optimal levels.",
    "The Model S has a range of 405 miles on a single charge.",
    "Charging stations are available at all Stark Industries locations.",
    "I've set your home climate to 72 degrees.",
    "Your vehicle will be ready for your morning commute.",
  ];

  useEffect(() => {
    if (responseText) {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < responseText.length) {
          setAnimatedText(responseText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 30);
      
      return () => clearInterval(typingInterval);
    }
  }, [responseText]);

  const handleStartListening = () => {
    setIsListening(true);
    
    // Simulate voice recognition and response
    setTimeout(() => {
      setIsListening(false);
      setResponseText(jarvisResponses[commandIndex]);
      setCommandIndex((prevIndex) => (prevIndex + 1) % jarvisResponses.length);
    }, 2000);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-space-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="holographic rounded-lg max-w-md w-full p-6 relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-reactor-white hover:text-stark-red transition-colors"
          >
            <X size={20} />
          </button>
          
          <div className="text-center mb-6">
            <h3 className="font-stark text-xl mb-2 text-electric-blue">J.A.R.V.I.S. INTERFACE</h3>
            <p className="text-sm text-reactor-white/70">Voice Command System</p>
          </div>
          
          <div className="bg-dark-blue/50 rounded-lg p-4 mb-6 min-h-[100px] flex items-center justify-center">
            {!responseText && !isListening ? (
              <p className="text-reactor-white/50 font-tech text-sm text-center">
                Tap the microphone and speak a command
              </p>
            ) : isListening ? (
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-4 h-4 bg-electric-blue rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-electric-blue/50 rounded-full animate-ping"></div>
                </div>
                <p className="mt-2 font-tech text-sm text-electric-blue">Listening...</p>
              </div>
            ) : (
              <div className="flex items-start">
                <Volume2 className="text-electric-blue mr-2 mt-1 flex-shrink-0" size={16} />
                <p className="font-tech text-sm text-reactor-white">
                  {animatedText}
                  <span className="inline-block w-1 h-4 ml-1 bg-electric-blue animate-pulse"></span>
                </p>
              </div>
            )}
          </div>
          
          <motion.button
            onClick={handleStartListening}
            className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center ${
              isListening ? 'bg-stark-red' : 'bg-electric-blue'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            disabled={isListening}
          >
            <Mic size={24} className="text-reactor-white" />
            <div className={`absolute inset-0 rounded-full ${
              isListening ? 'bg-stark-red/30' : 'bg-electric-blue/30'
            } animate-ping`}></div>
          </motion.button>
          
          <div className="mt-6 text-xs text-center text-reactor-white/50">
            <p>Try saying: "Show me the specs" or "What's the range?"</p>
            <p className="mt-1 text-electric-blue/70">EASTER EGG: "I am Iron Man"</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VoiceCommandModal;