import { useCallback, useMemo, useState, useRef } from "react";
import ReactFlow, {
  Edge,
  Node,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel,
  applyEdgeChanges,
} from "reactflow";
// 👇 you need to import the reactflow styles
import "reactflow/dist/style.css";
import Button from "../basic/genial/button";
import { TextUpdaterNode } from "./Box";
import { toPng } from "html-to-image";

type Props = {
  width: number;
  height: number;
};
export type Values = {
  id: string;
  color: string;
  tags?: string[];
  value: string;
  shape: "circle" | "square" | "rectangle" | "diamond" | "triangle";
  active?: boolean;
  width?: number;
  height?: number;
};

const initialEdges = [
  {
    id: "edge-1",
    source: "node-1",
    sourceHandle: "node-1-bs",
    targetHandle: "node-2-tt",
    target: "node-2",
    style: {
      borderWidth: 4,
      stroke: "#F0C6C6",
      strokeWidth: 4,
    },
    arrowHeadType: "arrowclosed",
    label: "IDEAS",
    labelStyle: {
      fontSize: 12,
      fontWeight: 700,
    },
  },
  {
    sourceHandle: "node-2-bs",
    targetHandle: "node-3-tt",
    id: "edge-2",
    source: "node-2",
    target: "node-3",
    style: {
      borderWidth: 4,
      stroke: "#9ce29d",
      strokeWidth: 4,
    },
    label: "Experiments",
    labelStyle: {
      fontSize: 12,
      fontWeight: 700,
    },
  },
] as Edge[];
const definedNodeTypes = { textUpdater: TextUpdaterNode };

function downloadImage(dataUrl: string) {
  const a = document.createElement("a");

  a.setAttribute("download", "reactflow.png");
  a.setAttribute("href", dataUrl);
  a.click();
}

function Flow({ width, height }: Props) {
  const initialNodes = [
    {
      id: "node-1",
      type: "textUpdater",
      position: { x: width / 2, y: height / 10 },
      data: {
        id: "node-1",
        color: "#F0C6C6",
        tags: ["creative", "innovative"],
        value: "IDEAS",
        shape: "rectangle",
        width: 200,
        height: 120,
      },
    },
    {
      id: "node-2",
      type: "textUpdater",
      position: { x: width / 2.5, y: height / 3 },
      data: {
        id: "node-2",
        color: "#9ce29d",
        tags: ["realistic", "practical", "concrete"],
        value: "Experiments",
        shape: "rectangle",
        width: 200,
        height: 120,
      },
    },
    {
      id: "node-3",
      type: "textUpdater",
      position: { x: width / 2, y: height / 1.7 },
      data: {
        id: "node-3",
        color: "#B9D0FD",
        tags: ["analytical", "logical", "scientific"],
        value: "Evaluation",
        shape: "rectangle",
        width: 200,
        height: 120,
      },
    },
  ] as Node<Values>[];
  const [selectedNodeId, setSelectedNodeId] = useState("");
  const [selectedEdgeId, setSelectedEdgeId] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [nodes, setNodes, onNodesChange] = useNodesState<Values>(initialNodes);
  const [edges, setEdges, onEdgesChanges] = useEdgesState(initialEdges);

  /**
   * ref to continer
   */
  const containerRef = useRef<HTMLDivElement>();
  const onConnect = useCallback((connection) => {
    const newEdge = addEdge(
      {
        ...connection,
        markerEnd: true,
        markerStart: true,
        labelStyle: {
          fontSize: 12,
          fontWeight: 700,
        },
        style: {
          ...connection.style,

          strokeWidth: 4,
        },
      },
      nodes
    );
    setEdges((es) => es.concat(newEdge));
  }, []);

  const onClick = () => {
    toPng(containerRef.current, {
      filter: (node) => {
        // we don't want to add the minimap and the controls to the image
        if (
          node?.classList?.contains("react-flow__minimap") ||
          node?.classList?.contains("react-flow__controls") ||
          node?.classList?.contains("panel") ||
          node?.classList?.contains("react-flow__panel")
        ) {
          return false;
        }

        return true;
      },
    }).then(downloadImage);
  };

  const nodesWithActive = useMemo(
    () =>
      nodes.map((node) => {
        if (node.id === selectedNodeId) {
          return {
            ...node,
            data: {
              ...node.data,
              active: true,
            },
          };
        }
        return {
          ...node,
          data: {
            ...node.data,
            active: false,
          },
        };
      }),
    [nodes, selectedNodeId]
  );

  const edgeWithActive = useMemo(
    () =>
      edges.map((edge) => {
        if (selectedEdgeId === edge.id) {
          return {
            ...edge,
            style: {
              ...edge.style,
              strokeDasharray: "5,5",
              strokeWidth: 6,
            },
          };
        }
        return {
          ...edge,
          style: {
            ...edge.style,
            strokeDasharray: "0",
            strokeWidth: 4,
          },
        };
      }),
    [edges, selectedEdgeId]
  );

  const selectedNode = useMemo(
    () => nodesWithActive.find((node) => node.id === selectedNodeId),
    [nodesWithActive, selectedNodeId, setNodes]
  );

  const selectedEdge = useMemo(
    () => edgeWithActive.find((edge) => edge.id === selectedEdgeId),
    [edgeWithActive, selectedEdgeId, setEdges]
  );

  const onAdd = useCallback(() => {
    const newNode = {
      id: `node-${nodes.length + 1}`,
      type: "textUpdater",
      position: { x: width / 2, y: height / 2 },
      data: {
        id: `node-${nodes.length + 1}`,
        value: "New Node",
        color: "#000000",
        shape: "rectangle",
        width: 200,
        height: 120,
      },
    };
    setNodes((ns) => ns.concat(newNode));
  }, [nodes]);

  return (
    <div className=" w-full h-full" ref={containerRef}>
      <ReactFlow
        onNodeClick={(event, node) => {
          setSelectedEdgeId("");
          setSelectedNodeId(node.id);
        }}
        nodeTypes={definedNodeTypes}
        nodes={nodesWithActive}
        edges={edgeWithActive}
        onNodesChange={onNodesChange}
        onEdgeClick={(event, edge) => {
          setSelectedNodeId("");
          setSelectedEdgeId(edge.id);
        }}
        onConnect={onConnect}
        onEdgesChange={onEdgesChanges}
      >
        <Panel className="panel" position="top-left">
          <Button color="gray" size="sm" label="Add" onClick={onAdd} />
          <div className="flex flex-col gap-2">
            {selectedEdgeId !== "" && selectedEdge && (
              <div className="bg-transparent p-2 w-60">
                <div className="flex justify-end mb-5">
                  <Button
                    variant="ghost"
                    size="sm"
                    label="close"
                    onClick={() => setSelectedEdgeId("")}
                  />
                </div>
                <div className="grid grid-cols-1 gap-3 ">
                  <input
                    type="text"
                    className="p-2 rounded border bg-transparent border-gray-400 dark:text-gray-200 dark:border-gray-700 "
                    placeholder="name"
                    value={selectedEdge?.label || ""}
                    onChange={(e) => {
                      const newEdge = {
                        ...selectedEdge,
                        label: e.target.value,
                        data: {
                          ...selectedEdge.data,
                          label: e.target.value,
                        },
                      };
                      setEdges((es) =>
                        es.map((edge) =>
                          edge.id === selectedEdge.id ? newEdge : edge
                        )
                      );
                    }}
                  />

                  <input
                    type="color"
                    className="p-1 border rounded bg-transparent border-gray-400 dark:border-gray-700 "
                    value={selectedEdge?.style?.stroke}
                    onChange={(e) => {
                      const newEdge = {
                        ...selectedEdge,
                        style: {
                          ...selectedEdge.style,
                          stroke: e.target.value,
                        },
                      };
                      setEdges((es) =>
                        es.map((edge) =>
                          edge.id === selectedEdge.id ? newEdge : edge
                        )
                      );
                    }}
                  />
                </div>
              </div>
            )}

            {selectedNodeId !== "" && selectedNode && (
              <div className="bg-transparent p-2 w-60 ">
                {/**
                 * close button
                 */}
                <div className="flex justify-end mb-5">
                  <Button
                    variant="ghost"
                    size="sm"
                    label="close"
                    onClick={() => setSelectedNodeId("")}
                  />
                </div>

                <div className="grid grid-cols-1 gap-3 ">
                  <input
                    type="text"
                    className="p-2 rounded border bg-transparent border-gray-400 dark:text-gray-200 dark:border-gray-700 "
                    placeholder="name"
                    value={selectedNode.data.value}
                    onChange={(e) => {
                      const newNodes = nodes.map((node) => {
                        if (node.id === selectedNode.id) {
                          return {
                            ...node,
                            data: {
                              ...node.data,
                              value: e.target.value,
                            },
                          };
                        }
                        return node;
                      });
                      setNodes(newNodes);
                    }}
                  />
                  <p className="mb-0 mt-2"> Height: </p>

                  <input
                    type="number"
                    className="p-2 rounded border bg-transparent border-gray-400 dark:text-gray-200 dark:border-gray-700 "
                    placeholder="height"
                    value={selectedNode.data.height || "40"}
                    onChange={(e) => {
                      const newNodes = nodes.map((node) => {
                        if (node.id === selectedNode.id) {
                          return {
                            ...node,
                            data: {
                              ...node.data,
                              height: Number(e.target.value),
                            },
                          };
                        }
                        return node;
                      });
                      setNodes(newNodes);
                    }}
                  />
                  <p className="mb-0 mt-2"> Width: </p>
                  <input
                    type="number"
                    className="p-2 rounded border bg-transparent border-gray-400 dark:text-gray-200 dark:border-gray-700 "
                    placeholder="width"
                    value={selectedNode.data.width || "40"}
                    onChange={(e) => {
                      console.log("ON EVENT:", e.target.value);
                      const newNodes = nodes.map((node) => {
                        if (node.id === selectedNode.id) {
                          return {
                            ...node,
                            data: {
                              ...node.data,
                              width: Number(e.target.value),
                            },
                          };
                        }
                        return node;
                      });
                      setNodes(newNodes);
                    }}
                  />

                  <input
                    type="text"
                    className="p-2 border rounded bg-transparent border-gray-400 dark:text-gray-200 dark:border-gray-700 "
                    placeholder="tags"
                    onChange={(e) => {
                      const newNodes = nodes.map((node) => {
                        if (node.id === selectedNode.id) {
                          return {
                            ...node,
                            data: {
                              ...node.data,
                              tags: e.target.value !== ""
                                ? e.target.value.split(",")
                                : [],
                            },
                          };
                        }
                        return node;
                      });
                      setNodes(newNodes);
                    }}
                    value={selectedNode.data?.tags?.join(",") || ""}
                  />
                  <select
                    className="p-2 border rounded bg-transparent border-gray-400 dark:text-gray-200 dark:border-gray-700 "
                    value={selectedNode.data.shape}
                    onChange={(e) => {
                      const newNodes = nodes.map((node) => {
                        if (node.id === selectedNode.id) {
                          return {
                            ...node,
                            data: {
                              ...node.data,
                              shape: e.target.value,
                            },
                          };
                        }
                        return node;
                      });
                      setNodes(newNodes);
                    }}
                  >
                    <option value="rectangle">rectangle</option>
                    <option value="circle">circle</option>
                    <option value="diamond">diamond</option>
                  </select>

                  <input
                    type="color"
                    className="p-1 border rounded bg-transparent border-gray-400 dark:border-gray-700 "
                    value={selectedNode.data.color}
                    onChange={(e) => {
                      const newNodes = nodes.map((node) => {
                        if (node.id === selectedNode.id) {
                          return {
                            ...node,
                            data: {
                              ...node.data,
                              color: e.target.value,
                            },
                          };
                        }
                        return node;
                      });
                      setNodes(newNodes);
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </Panel>
        <Panel className="panel" position="top-right">
          <div className="p-3 grid gap-2 grid-cols-1 ">
            <Button
              variant="ghost"
              size="sm"
              label="Download"
              onClick={onClick}
            />
            <Button
              variant="ghost"
              size="sm"
              label={isFullScreen ? "Exit Fullscreen" : "Fullscreen"}
              onClick={() => {
                if (!containerRef.current) return;
                if (isFullScreen) {
                  document.exitFullscreen();
                } else {
                  containerRef.current.requestFullscreen();
                }
                setIsFullScreen(!isFullScreen);
              }}
            />
          </div>
        </Panel>
        <MiniMap
          nodeColor={(nodes) => {
            const foundNode = nodesWithActive.find(
              (node) => node.id === nodes.id
            );
            if (foundNode) {
              return foundNode.data.color;
            }
            return "#eee";
          }}
        />
        <Controls />
        <Background className="bg-gray-100 dark:bg-gray-800" />
      </ReactFlow>
    </div>
  );
}

export { Flow };
