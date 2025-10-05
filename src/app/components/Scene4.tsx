import { useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";

interface Scene4Props {
  onNext: () => void;
}

export function Scene4({ onNext }: Scene4Props) {
  const [textVisible, setTextVisible] = useState(true);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) return;

    setClicked(true);
    setTextVisible(false);

    setTimeout(() => {
      onNext();
    }, 1500);
  };

  const organizationLogos = [
    { name: "IAWN", color: "bg-blue-600", size: "w-24 h-24" },
    { name: "UNOOSA", color: "bg-green-600", size: "w-32 h-20" },
    { name: "SMPAG", color: "bg-red-600", size: "w-28 h-28" },
    { name: "UN", color: "bg-cyan-600", size: "w-20 h-32" },
    { name: "NASA", color: "bg-orange-600", size: "w-36 h-16" },
    { name: "ESA", color: "bg-purple-600", size: "w-24 h-20" },
    { name: "OBSERVATORY A", color: "bg-yellow-600", size: "w-28 h-24" },
    { name: "OBSERVATORY B", color: "bg-pink-600", size: "w-20 h-28" },
    { name: "MPC", color: "bg-indigo-600", size: "w-32 h-24" },
    { name: "SECURITY COUNCIL", color: "bg-gray-600", size: "w-40 h-20" },
  ];

  return (
    <div
      className="w-full h-full relative cursor-pointer bg-black"
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
          src="/meeting-room.webp"
          alt="Government conference room meeting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      {/* Chaotic Logo Background */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: clicked ? 0 : 1 }}
        transition={{ duration: 1.5, delay: clicked ? 1 : 0 }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="relative w-full h-full">
          {organizationLogos.map((org, index) => (
            <motion.div
              key={org.name}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
                y: Math.random() * window.innerHeight,
                rotate: Math.random() * 360,
              }}
              animate={{
                opacity: [0, 1, 0.8, 1],
                x: Math.random() * (window.innerWidth - 200),
                y: Math.random() * (window.innerHeight - 200),
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                delay: index * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className={`absolute ${org.color} ${org.size} rounded-lg flex items-center justify-center border-2 border-white/20`}
            >
              <span className="text-white text-xs text-center p-2 break-words">
                {org.name}
              </span>
            </motion.div>
          ))}

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {organizationLogos.map((_, index) => (
              <motion.line
                key={`line-${index}`}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 2, delay: index * 0.1 }}
                x1={`${20 + ((index * 80) % window.innerWidth)}`}
                y1={`${100 + ((index * 60) % window.innerHeight)}`}
                x2={`${200 + (((index + 1) * 90) % window.innerWidth)}`}
                y2={`${150 + (((index + 1) * 70) % window.innerHeight)}`}
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            ))}
          </svg>

          {/* Chain of Command Arrow */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-4 text-white/60 text-sm">
              <span>Observatory</span>
              <span>→</span>
              <span>MPC</span>
              <span>→</span>
              <span>IAWN</span>
              <span>→</span>
              <span>UNOOSA</span>
              <span>→</span>
              <span>SMPAG</span>
              <span>→</span>
              <span>UN</span>
              <span>→</span>
              <span className="text-red-400">YOU</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Text Overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: textVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center p-8"
      >
        <div className="max-w-4xl text-center">
          <p className="text-white text-xl md:text-2xl leading-relaxed font-medium bg-black/80 p-8 rounded-lg backdrop-blur-sm border border-red-600/30">
            The dire trajectory of the asteroid is confirmed. Since there is no
            formalized global chain of command the information only reaches you
            half a year later through from the observatory → Minor Planet Center
            → IAWN → UNOOSA → SMPAG → UN Security Council only after this it
            reaches your government cabinet.
          </p>
          <div className="mt-6 text-white/70 text-sm">Click to continue</div>
        </div>
      </motion.div>
    </div>
  );
}
