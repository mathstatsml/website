"use client";

import { VideoCard } from "~/components/ui/video-card";
import {
  type ElementDefinition,
  type VideoNodeDataDefinition,
} from "~/types/cytoscape-elements";
import cytoscape, {
  type Core,
  type NodeSingular,
  type Stylesheet,
} from "cytoscape";
import dagre, { type DagreLayoutOptions } from "cytoscape-dagre";
import navigator from "cytoscape-navigator";
import cytoscapePopper, {
  type PopperFactory,
  type PopperInstance,
} from "cytoscape-popper";
import { useEffect, useRef, useState } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import { createRoot } from "react-dom/client";
import tippy, { hideAll, sticky } from "tippy.js";
import "cytoscape-navigator/cytoscape.js-navigator.css";
import "tippy.js/animations/scale-subtle.css";
import viewUtilities from "cytoscape-view-utilities";

const nodeEdgeHtmlLabel = require("cytoscape-node-edge-html-label");

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

  const layout: DagreLayoutOptions = {
    name: "dagre",
    rankDir: "LR",
    nodeDimensionsIncludeLabels: true,
  };

  const stylesheet: Stylesheet[] = [
    {
      selector: "node",
      style: {
        label: "data(label)",
      },
    },
    {
      selector: "edge",
      style: {
        "target-arrow-shape": "triangle",
        "curve-style": "bezier",
      },
    },
  ];

  const cyRef = useRef<Core | null>(null);
  const [currentTip, setCurrentTip] = useState<PopperInstance | null>(null);

  useEffect(() => {
    if (cyRef.current) {
      const cy = cyRef.current;
      const nav = cy.navigator();

      const closeTippy = () => {
        if (currentTip) {
          currentTip.hide();
          setCurrentTip(null);
        }
      };

      cy.on("tap", "[nodeType = 'video']", (event) => {
        closeTippy();
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
        setCurrentTip(tip);
      });
      cy.on("tap", closeTippy);

      // cy.on("mouseover", "[nodeType = 'video']", (event) => {
      //   const node = event.target as NodeSingular;
      //   const incomingElements = node.incomers();
      //   incomingElements.style({
      //     "background-color": "#ff0000",
      //     "line-color": "#ff0000",
      //     "target-arrow-color": "#ff0000",
      //   });
      // });

      return () => {
        hideAll();
        nav.destroy();
        cy.removeAllListeners();
      };
    }
  }, [currentTip]);

  return (
    <CytoscapeComponent
      cy={(cy) => {
        cyRef.current = cy;
      }}
      elements={elements}
      layout={layout}
      className="size-full"
      minZoom={1e-1}
      maxZoom={1e1}
      boxSelectionEnabled={false}
      autoungrabify={true}
      stylesheet={stylesheet}
    />
  );
};
