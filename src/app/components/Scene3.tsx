import { useState, useRef } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";

interface Scene3Props {
  onNext: () => void;
}

export function Scene3({ onNext }: Scene3Props) {
  const [textVisible, setTextVisible] = useState(true);
  const [clicked, setClicked] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (clicked) return;

    setClicked(true);
    setTextVisible(false);

    setTimeout(() => {
      onNext();
    }, 1500);
  };

  return (
    <div
      className="w-full h-full relative cursor-pointer"
      onClick={handleClick}
    >
      {/* Scrollable Background Panel */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: clicked ? 0 : 1 }}
        transition={{ duration: 1.5, delay: clicked ? 1 : 0 }}
        className="absolute inset-0 overflow-x-auto"
        ref={scrollRef}
      >
        <div className="flex w-[200vw] h-full">
          {/* First Panel */}
          <div className="w-screen h-full relative flex-shrink-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1741097720001-bef669d6a359?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWx0aXBsZSUyMHRlbGVzY29wZXMlMjBvYnNlcnZhdG9yaWVzJTIwYXN0cm9ub215fGVufDF8fHx8MTc1OTY2NDM4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Multiple telescopes and observatories"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />

            {/* Observatory Data Overlays */}
            {/* <div className="absolute top-1/4 left-8 bg-green-900/80 p-4 rounded border-2 border-green-400 text-green-100 font-mono text-sm">
              <div>OBSERVATORY: Arecibo</div>
              <div>STATUS: CONFIRMED</div>
              <div>ORBIT: 0.887 AU</div>
            </div>

            <div className="absolute bottom-1/3 right-8 bg-red-900/80 p-4 rounded border-2 border-red-400 text-red-100 font-mono text-sm">
              <div>ALERT LEVEL: CRITICAL</div>
              <div>TRAJECTORY: CONFIRMED</div>
              <div>IMPACT PROB: 87.3%</div>
            </div> */}
          </div>

          {/* Second Panel */}
          <div className="w-screen h-full relative flex-shrink-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1616050068549-313fb5b5b8b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5pY2tlZCUyMHNjaWVudGlzdHMlMjBhc3Ryb25vbWVycyUyMHdvcmtpbmd8ZW58MXx8fHwxNzU5NjY0Mzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Scientists with telescopes and equipment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />

            {/* More Data Overlays */}
            <div className="absolute top-8 left-1/4 bg-blue-900/80 p-4 rounded border-2 border-blue-400 text-blue-100 font-mono text-sm">
              <div>ESO - PARANAL</div>
              <div>MASS: 2.1Mt</div>
              <div>VELOCITY: 22.01 km/s</div>
            </div>

            <div className="absolute bottom-8 left-8 bg-yellow-900/80 p-4 rounded border-2 border-yellow-400 text-yellow-100 font-mono text-sm">
              <div>KECK OBSERVATORY</div>
              <div>CROSS-REFERENCE: ✓</div>
              <div>DATA VERIFIED: ✓</div>
            </div>

            <div className="absolute right-8 top-1/2 bg-purple-900/80 p-4 rounded border-2 border-purple-400 text-purple-100 font-mono text-sm">
              <div>HUBBLE SPACE</div>
              <div>VISUAL CONFIRM: ✓</div>
              <div>PANIC LEVEL: MAX</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Text Overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: textVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none"
      >
        <div className="max-w-4xl text-center">
          <p className="text-white text-xl md:text-2xl leading-relaxed font-medium bg-black/70 p-8 rounded-lg backdrop-blur-sm">
            The year passes by and multiple observatories around the world
            confirm the orbit and refine predictions.
          </p>
          <div className="mt-6 text-white/70 text-sm">Click to continue</div>
        </div>
      </motion.div>
    </div>
  );
}
