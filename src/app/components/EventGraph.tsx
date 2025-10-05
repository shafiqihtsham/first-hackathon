import * as React from "react";
import { EventGraph } from "./parser";
import { nodes, edges } from "./data";
import { GameBackground } from "./GameBackground";

export const WebEventGraph: React.FC = () => {
  const [currentNodeId, setCurrentNodeId] =
    React.useState<string>("StartScreen");

  // Game state metrics (1–100 scale)
  const [budget, setBudget] = React.useState(100);
  const [publicOpinion, setPublicOpinion] = React.useState(50);
  const [researchProgress, setResearchProgress] = React.useState(50);
  const [defenseReadiness, setDefenseReadiness] = React.useState(50);

  // Timer state (e.g. years until impact)
  const [timeToImpact, setTimeToImpact] = React.useState(100); // Change to desired starting time

  const eventGraph = React.useMemo(() => {
    try {
      return new EventGraph(nodes, edges);
    } catch (err) {
      console.error("Failed to construct EventGraph:", err);
      return null;
    }
  }, []);

  if (!eventGraph) return <div>Loading event graph...</div>;

  const currentNode = eventGraph.nodes.find((n) => n.id === currentNodeId);
  if (!currentNode) return <div>Error: Node not found</div>;

  const outgoingEdges = eventGraph.edges.filter(
    (e) => e.from === currentNodeId
  );

  const handleEdgeClick = (edge: any) => {
    setCurrentNodeId(edge.to);

    setBudget((prev) => Math.min(100, Math.max(0, prev + (edge.money || 0))));
    setPublicOpinion((prev) =>
      Math.min(100, Math.max(0, prev + (edge.reputation || 0)))
    );
    setResearchProgress((prev) =>
      Math.min(100, Math.max(0, prev + (edge.research || 0)))
    );
    setDefenseReadiness((prev) =>
      Math.min(100, Math.max(0, prev + (edge.defense || 0)))
    );

    // Reduce time based on edge.time (fallback 0)
    setTimeToImpact((prev) => Math.max(0, prev - (edge.time || 0)));
  };

  const ProgressBar = ({
    label,
    value,
    color,
  }: {
    label: any;
    value: any;
    color: any;
  }) => (
    <div className="mb-2">
      <div className="flex justify-between mb-1 text-sm font-medium text-white">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-40 bg-gray-700 rounded h-4">
        <div
          className="h-4 rounded"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );

  const gameState = "playing";

  return (
    <div className="relative w-full min-h-screen">
      {/* Background */}
      <GameBackground timeToImpact={timeToImpact} gameState={gameState} />

      {/* Timer Top-Center */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-900/40 border-2 border-lime-400 text-[#00FF00] border-dashed rounded px-6 py-2 text-center text-lg font-mono">
        Time to Impact: {timeToImpact} years
      </div>

      {/* Top-Left Stats */}
      <div className="absolute top-4 left-4 bg-green-900/40 border-2 border-lime-400 text-[#00FF00] border-dashed rounded p-4 max-w-xs">
        <ProgressBar label="Budget" value={budget} color="#10B981" />
        <ProgressBar
          label="Public Opinion"
          value={publicOpinion}
          color="#3B82F6"
        />
      </div>

      {/* Top-Right Stats */}
      <div className="absolute top-4 right-4 bg-green-900/40 border-2 border-lime-400 text-[#00FF00] border-dashed rounded p-4 max-w-xs">
        <ProgressBar
          label="Research Progress"
          value={researchProgress}
          color="#F59E0B"
        />
        <ProgressBar
          label="Defense Readiness"
          value={defenseReadiness}
          color="#EF4444"
        />
      </div>

      {/* Description Bottom-Left */}
      <div className="absolute bottom-30 left-6 max-w-sm min-h-52 bg-green-900/40 border-2 border-lime-400 text-[#00FF00] border-dashed rounded p-4">
        <h2 className="whitespace-pre-line text-lg font-semibold">
          {currentNode.description}
        </h2>
      </div>

      {/* Facts Bottom-Right */}
      <div className="absolute bottom-30 right-6 max-w-sm min-h-52 bg-green-900/40 border-2 border-lime-400 text-[#00FF00] border-dashed rounded p-4">
        <h2 className="whitespace-pre-line text-lg font-semibold">
          {currentNode.factText}
        </h2>
      </div>

      {/* Buttons Bottom-Center */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-xl px-4">
        {outgoingEdges.length === 0 ? (
          <p className="text-center text-white font-semibold">
            No further options. End of path.
          </p>
        ) : (
          <div className="flex justify-center space-x-4">
            {outgoingEdges.map((edge, index) => (
              <button
                key={index}
                onClick={() => handleEdgeClick(edge)}
                className="bg-white text-black font-semibold rounded px-6 py-2 hover:bg-gray-200 transition"
              >
                {edge.optionText || "Continue"}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
