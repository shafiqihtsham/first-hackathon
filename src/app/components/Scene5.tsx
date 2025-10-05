import { useState } from 'react';
import { motion } from 'motion/react';

interface Scene5Props {
  onNext: () => void;
}

export function Scene5({ onNext }: Scene5Props) {
  const [currentText, setCurrentText] = useState<'first' | 'second'>('first');
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) return;
    
    if (currentText === 'first') {
      setCurrentText('second');
    } else {
      setClicked(true);
      setTimeout(() => {
        onNext();
      }, 1500);
    }
  };

  return (
    <div 
      className="w-full h-full relative cursor-pointer bg-black flex items-center justify-center"
      onClick={handleClick}
    >
      {/* Background stars effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              delay: Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: clicked ? 0 : 1 }}
        transition={{ duration: 1.5 }}
        className="text-center z-10"
      >
        {currentText === 'first' ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <p className="text-white text-2xl md:text-3xl leading-relaxed font-medium mb-8">
              Now it is 2017. It is confirmed that the asteroid will hit earth in about 100 years.
            </p>
            <div className="text-white/70 text-sm">
              Click to continue
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", damping: 15 }}
            className="max-w-4xl"
          >
            <motion.h1
              animate={{
                textShadow: [
                  "0 0 10px rgba(255,255,255,0.5)",
                  "0 0 20px rgba(255,255,255,0.8)",
                  "0 0 10px rgba(255,255,255,0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-wide"
            >
              WHAT WILL YOU DO?
            </motion.h1>
            <div className="text-white/70 text-lg">
              Click to start the game
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Subtle earth silhouette in background */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full border border-blue-500/20"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  );
}