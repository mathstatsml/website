import { type VideoNodeDataDefinition } from "~/types/cytoscape-elements";
import { useState } from "react";

export const VideoCard = ({
  id,
  label,
  parent,
  tier,
  type,
  author,
  link,
  tags,
}: VideoNodeDataDefinition) => {
  const [number, setNumber] = useState(0);

  return (
    <div className="border-4">
      <h2>{number}</h2>
      <button onClick={() => setNumber(number + 1)}>Click me!</button>
    </div>
  );
};
