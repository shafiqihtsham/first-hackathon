"use client";

import { GameBackground } from "./components/GameBackground";
import { WebEventGraph } from "./components/EventGraph";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <GameBackground gameState="playing" threatLevel={10} />
        <WebEventGraph />
      </main>
    </div>
  );
}
