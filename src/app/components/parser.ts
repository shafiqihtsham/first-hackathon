// ------------------
// Type Definitions
// ------------------

// Nodes must include an "id" and "description"
type NodeRow = {
  id: string;
  description: string;
  isEnd: boolean;
};

// Edges must include "from", "to", "optionText", and "condition"
//from,to,optionText,EffectDesc,time,money,reputation,Defense,research,effects
type EdgeRow = {
  from: string;
  to: string;
  optionText: string;
  effectDesc: string;
  time: number;
  money: number;
  reputation: number;
  defense: number;
  research: number;
  effects: number;
};

type NodeId = string;

// ------------------
// EventGraph Class
// ------------------

class EventGraph {
  public nodes: NodeRow[] = [];
  public edges: EdgeRow[] = [];
  public adjacencyList: Map<NodeId, NodeId[]> = new Map();

  // Accept arrays directly instead of CSV strings
  constructor(nodes: NodeRow[], edges: EdgeRow[]) {
    this.nodes = [];
    this.edges = [];
    this.adjacencyList = new Map();

    // Validate and load nodes
    for (const node of nodes) {
      if (!node.id || node.id.trim() === "") {
        throw new Error(`Node missing required "id": ${JSON.stringify(node)}`);
      }
      this.nodes.push(node);
    }

    const seenNodes = new Set(this.nodes.map((n) => n.id));

    // Validate and load edges
    for (const edge of edges) {
      const { from, to } = edge;
      if (!from || !to) {
        throw new Error(`Edge missing "from" or "to": ${JSON.stringify(edge)}`);
      }
      if (!seenNodes.has(from)) {
        throw new Error(`Edge refers to unknown "from" node id: ${from}`);
      }
      if (!seenNodes.has(to)) {
        throw new Error(`Edge refers to unknown "to" node id: ${to}`);
      }
      this.edges.push(edge);
    }

    // Build adjacency list
    for (const nodeId of seenNodes) {
      this.adjacencyList.set(nodeId, []);
    }
    for (const { from, to } of this.edges) {
      this.adjacencyList.get(from)!.push(to);
    }
  }
}

// ------------------
// Exports
// ------------------

export { EventGraph };

export type { NodeRow, EdgeRow, NodeId };
