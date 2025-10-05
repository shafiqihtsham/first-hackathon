// ------------------
// Type Definitions
// ------------------

type CSVRow = Record<string, string>;

// Nodes must include an "id" and "description"
type NodeRow = CSVRow & {
  id: string;
  description: string;
};

// Edges must include "from", "to", "optionText", and "condition"
type EdgeRow = CSVRow & {
  from: string;
  to: string;
  optionText: string;
  condition: string;
};

type NodeId = string;

// ------------------
// CSV Parser
// ------------------

function parseCSV(csv: string): CSVRow[] {
  const rows = csv
    .trim()
    .replace(/\r/g, "")
    .split("\n")
    .map((line) => line.split(","));

  const header = rows[0];
  const dataRows = rows.slice(1);

  if (!header) return [];

  return dataRows.map((row) => {
    const obj: Record<string, string> = {};
    header.forEach((key, i) => {
      obj[key] = row[i] ?? "";
    });
    return obj;
  });
}

// ------------------
// EventGraph Class
// ------------------

class EventGraph {
  public nodes: NodeRow[] = [];
  public edges: EdgeRow[] = [];
  public adjacencyList: Map<NodeId, NodeId[]> = new Map();

  constructor(nodeCsvText: string, edgeCsvText: string) {
    this.nodes = [];
    this.edges = [];
    this.adjacencyList = new Map();

    const nodeCsv = parseCSV(nodeCsvText);
    const edgeCsv = parseCSV(edgeCsvText);

    // Validate and load nodes
    for (const record of nodeCsv) {
      if (!record.id || record.id.trim() === "") {
        throw new Error(
          `Node row missing required "id": ${JSON.stringify(record)}`
        );
      }
      this.nodes.push(record as NodeRow);
    }

    const seenNodes = new Set(this.nodes.map((n) => n.id));

    // Validate and load edges
    for (const record of edgeCsv) {
      const { from, to } = record;

      if (!from || !to) {
        throw new Error(
          `Edge row missing "from" or "to": ${JSON.stringify(record)}`
        );
      }
      if (!seenNodes.has(from)) {
        throw new Error(`Edge refers to unknown "from" node id: ${from}`);
      }
      if (!seenNodes.has(to)) {
        throw new Error(`Edge refers to unknown "to" node id: ${to}`);
      }

      this.edges.push(record as EdgeRow);
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

export { parseCSV, EventGraph };

export type { CSVRow, NodeRow, EdgeRow, NodeId };
