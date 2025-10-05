import { useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";

interface Scene2Props {
  onNext: () => void;
}

export function Scene2({ onNext }: Scene2Props) {
  const [textVisible, setTextVisible] = useState(true);
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) return;

    if (!showSecondImage) {
      // First click: fade out text and show second image
      setTextVisible(false);
      setTimeout(() => {
        setShowSecondImage(true);
        setTextVisible(true);
      }, 1000);
    } else {
      // Second click: move to next scene
      setClicked(true);
      setTextVisible(false);
      setTimeout(() => {
        onNext();
      }, 1500);
    }
  };

  return (
    <div
      className="w-full h-full relative cursor-pointer"
      onClick={handleClick}
    >
      {/* First Background Image - Panicked Astronomers */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: showSecondImage ? 0 : clicked ? 0 : 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1616050068549-313fb5b5b8b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5pY2tlZCUyMHNjaWVudGlzdHMlMjBhc3Ryb25vbWVycyUyMHdvcmtpbmd8ZW58MXx8fHwxNzU5NjY0Mzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Panicked astronomers working"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Second Background Image - Ecological Damage */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showSecondImage ? (clicked ? 0 : 1) : 0 }}
        transition={{ duration: 1.5, delay: clicked ? 1 : 0 }}
        className="absolute inset-0"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1707058665507-765a1575e7a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJ0aCUyMGRpc2FzdGVyJTIwYXN0ZXJvaWQlMjBpbXBhY3R8ZW58MXx8fHwxNzU5NjY0Mzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Earth disaster scenario"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Text Overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: textVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center p-8"
      >
        <div className="max-w-4xl text-center">
          <p className="text-white text-xl md:text-2xl leading-relaxed font-medium bg-black/60 p-8 rounded-lg backdrop-blur-sm">
            This initial observation sends the astronomers in a panic as the
            asteroid has a mass of 2 megatonnes and velocity of 22.01 km/s.
            Meaning that there is a significant likelihood of creating
            significant damage to human cities the size of Mexico City alongside
            disrupting the biosphere's energy flow from the kicking of dust into
            the atmosphere.
          </p>
          <div className="mt-6 text-white/70 text-sm">
            {!showSecondImage
              ? "Click to see the potential impact"
              : "Click to continue"}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
