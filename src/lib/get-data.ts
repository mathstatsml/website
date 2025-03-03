import fs from "fs";
import path from "path";
import {
  ElementSchema,
  type ElementDefinition,
} from "~/types/cytoscape-elements";
import { jsonSchema } from "~/types/json";
import { z } from "zod";

export const getData = (): ElementDefinition[] => {
  let elements: ElementDefinition[] = [];
  const dataPath = path.join(process.cwd(), "data");
  const jsonFiles = fs.readdirSync(dataPath);
  jsonFiles.forEach((file) => {
    if (path.extname(file) === ".json" && file !== "_schema.json") {
      const filePath = path.join(dataPath, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const jsonContent = JSON.parse(fileContent) as {
        elements: ElementDefinition[];
      };
      elements = [...elements, ...jsonContent.elements];
    }
  });
  jsonSchema.parse(elements);
  z.array(ElementSchema).parse(elements);
  return elements;
};
