"use client";

import { motion } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";

interface GameBackgroundProps {
  timeToImpact: number; // seconds or arbitrary units, 0 = impact now
  gameState: "playing" | "money" | "opinion" | "defense" | "research";
}

export function GameBackground({
  timeToImpact,
  gameState,
}: GameBackgroundProps) {
  // Normalize timeToImpact to a 0-1 range (1 = far away, 0 = impact now)
  // Clamp between 0 and 1 for safety
  const normalizedTime = Math.min(Math.max(timeToImpact / 100, 0), 1);

  // Map normalized time to vertical position:
  // 1 (far away) => top: 0% (top of viewport)
  // 0 (impact now) => top: 50% (center of viewport where Earth is)
  const topPercent = 0 + (1 - normalizedTime) * 50;

  // Asteroid size grows slightly as it approaches Earth
  const baseSize = 40; // px
  const maxSizeIncrease = 30; // px
  const size = baseSize + maxSizeIncrease * (1 - normalizedTime);

  if (gameState !== "playing") {
    // Show end-game backgrounds (same as your original)
    const endGameImages = {
      money:
        "https://images.unsplash.com/photo-1646227163733-90957a87b864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXN0cm95ZWQlMjBjaXR5JTIwcnVpbnMlMjBhcG9jYWx5cHNlfGVufDF8fHx8MTc1OTU1NjgwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      opinion:
        "https://images.unsplash.com/photo-1616600974135-0f850809ca28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZXN0JTIwYW5ncnklMjBjcm93ZCUyMGNpdHl8ZW58MXx8fHwxNzU5NTU2ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      defense:
        "https://images.unsplash.com/photo-1646227163733-90957a87b864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXN0cm95ZWQlMjBjaXR5JTIwcnVpbnMlMjBhcG9jYWx5cHNlfGVufDF8fHx8MTc1OTU1NjgwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      research:
        "https://images.unsplash.com/photo-1646227163733-90957a87b864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXN0cm95ZWQlMjBjaXR5JTIwcnVpbnMlMjBhcG9jYWx5cHNlfGVufDF8fHx8MTc1OTU1NjgwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    };

    return (
      <div className="absolute inset-0 overflow-hidden">
        <ImageWithFallback
          src={endGameImages[gameState as keyof typeof endGameImages]}
          alt={`Game over - ${gameState}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Earth in center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ImageWithFallback
          src="/earth.png"
          alt="Earth"
          className="w-48 h-48 rounded-full object-cover"
        />
      </div>

      {/* Asteroid - centered horizontally, moving vertically based on timeToImpact */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 rounded-full"
        animate={{ top: `${topPercent}%`, rotate: 360 }}
        transition={{
          top: { duration: 1, ease: "linear" },
          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
        }}
        style={{
          width: size,
          height: size,
          minWidth: 30,
          minHeight: 30,
          maxWidth: 70,
          maxHeight: 70,
        }}
      >
        <ImageWithFallback
          src="/asteroid.png"
          alt="Asteroid"
          className="w-full h-full rounded-full object-cover"
        />
      </motion.div>
    </div>
  );
}
