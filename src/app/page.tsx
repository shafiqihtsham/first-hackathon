"use client";

import { WebEventGraph } from "./components/EventGraph";
import { Scene1 } from "./components/Scene1";
import { Scene2 } from "./components/Scene2";
import { Scene3 } from "./components/Scene3";
import { Scene4 } from "./components/Scene4";
import { Scene5 } from "./components/Scene5";
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Home() {
  const [currentScene, setCurrentScene] = useState(0);
  const totalScenes = 6; // 5 intro scenes + game start

  const nextScene = () => {
    if (currentScene < totalScenes - 1) {
      setCurrentScene(currentScene + 1);
    }
  };

  const renderScene = () => {
    switch (currentScene) {
      case 0:
        return <Scene1 onNext={nextScene} />;
      case 1:
        return <Scene2 onNext={nextScene} />;
      case 2:
        return <Scene3 onNext={nextScene} />;
      case 3:
        return <Scene4 onNext={nextScene} />;
      case 4:
        return <Scene5 onNext={nextScene} />;
      case 5:
        return <WebEventGraph />;
      default:
        return <Scene1 onNext={nextScene} />;
    }
  };

  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      <motion.div
        key={currentScene}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="w-full h-full"
      >
        {renderScene()}
      </motion.div>
      
      {/* Progress indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalScenes }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentScene ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
