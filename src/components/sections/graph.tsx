import { Cytoscape } from "~/components/sections/cytoscape";
import { getData } from "~/lib/get-data";

export const Graph = () => {
  const elements = getData();

  return (
    <main className="h-screen w-screen">
      <Cytoscape elements={elements} />
    </main>
  );
};
