import * as React from "react";
import { EventGraph, NodeRow, EdgeRow } from "./parser";
import { nodes, edges } from "./data"; // Import raw data arrays

export const WebEventGraph: React.FC = () => {
  const [currentNodeId, setCurrentNodeId] =
    React.useState<string>("StartScreen");

  // Create EventGraph instance once (no dependencies, raw data is static)
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

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white shadow-md rounded-lg text-center">
      <h2 className="text-xl font-semibold mb-4 text-black">
        {currentNode.description}
      </h2>

      {outgoingEdges.length === 0 ? (
        <p className="text-gray-500">No further options. End of path.</p>
      ) : (
        <div className="space-y-2">
          {outgoingEdges.map((edge, index) => (
            <button
              key={index}
              onClick={() => setCurrentNodeId(edge.to)}
              className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-black font-semibold rounded"
            >
              {edge.optionText || "Continue"}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
