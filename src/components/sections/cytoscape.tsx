"use client";

import { VideoCard } from "~/components/ui/video-card";
import {
  type ElementDefinition,
  type VideoNodeDataDefinition,
} from "~/types/cytoscape";
import cytoscape, { type Core, type NodeSingular } from "cytoscape";
import dagre, { type DagreLayoutOptions } from "cytoscape-dagre";
import navigator from "cytoscape-navigator";
import cytoscapePopper, { type PopperFactory } from "cytoscape-popper";
import { useEffect, useRef } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import { createRoot } from "react-dom/client";
import tippy, { sticky } from "tippy.js";
import "cytoscape-navigator/cytoscape.js-navigator.css";
import "tippy.js/animations/scale-subtle.css";

export const Cytoscape = ({ elements }: { elements: ElementDefinition[] }) => {
  const tippyFactory: PopperFactory = (ref, content) => {
    const dummyDomEle = document.createElement("div");

    const tip = tippy(dummyDomEle, {
      getReferenceClientRect: ref.getBoundingClientRect,
      trigger: "manual",
      content: content,
      arrow: true,
      placement: "right",
      hideOnClick: false,
      sticky: "reference",
      interactive: true,
      appendTo: () => document.body,
      animation: "scale-subtle",
      plugins: [sticky],
    });

    return tip;
  };

  cytoscape.use(dagre);
  cytoscape.use(cytoscapePopper(tippyFactory));
  cytoscape.use(navigator);

  const cyRef = useRef<Core | null>(null);

  useEffect(() => {
    if (cyRef.current) {
      const cy = cyRef.current;
      const nav = cy.navigator();

      cy.on("tap", "[nodeType = 'video']", (event) => {
        const node = event.target as NodeSingular;
        const videoData = node.data() as VideoNodeDataDefinition;
        const tip = node.popper({
          content: () => {
            const div = document.createElement("div");
            const root = createRoot(div);
            root.render(<VideoCard {...videoData} />);
            return div;
          },
        });
        tip.show();
      });

      return () => {
        nav.destroy();
        cy.removeAllListeners();
      };
    }
  }, []);

  const layout: DagreLayoutOptions = {
    name: "dagre",
    rankDir: "LR",
    nodeDimensionsIncludeLabels: true,
  };

  return (
    <CytoscapeComponent
      cy={(cy) => {
        cyRef.current = cy;
      }}
      elements={elements}
      layout={layout}
      className="size-full"
    />
  );
};
