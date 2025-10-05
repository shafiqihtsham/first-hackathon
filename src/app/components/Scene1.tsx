import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './ImageWithFallback';

interface Scene1Props {
  onNext: () => void;
}

export function Scene1({ onNext }: Scene1Props) {
  const [textVisible, setTextVisible] = useState(true);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) return;
    
    setClicked(true);
    // First fade out the text
    setTextVisible(false);
    
    // Then fade out the scene and move to next
    setTimeout(() => {
      onNext();
    }, 1500);
  };

  return (
    <div 
      className="w-full h-full relative cursor-pointer"
      onClick={handleClick}
    >
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: clicked ? 0 : 1 }}
        transition={{ duration: 1.5, delay: clicked ? 1 : 0 }}
        className="absolute inset-0"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1727034393564-dc7b0275686d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYnNlcnZhdG9yeSUyMHRlbGVzY29wZSUyMG5pZ2h0JTIwYXN0cm9ub215fGVufDF8fHx8MTc1OTY2NDM4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Mt Lemmon Observatory at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Text Overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: textVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center p-8"
      >
        <div className="max-w-4xl text-center">
          <p className="text-white text-xl md:text-2xl leading-relaxed font-medium bg-black/50 p-8 rounded-lg backdrop-blur-sm">
            It is 2016 on a calm December night in Arizona's Mt Lemmon Observatory. 
            Astronomers make the initial discovery of an asteroid with a potential 
            of colliding with the earth.
          </p>
          <div className="mt-6 text-white/70 text-sm">
            Click to continue
          </div>
        </div>
      </motion.div>
    </div>
  );
}