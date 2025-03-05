/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  type EdgeDataDefinition,
  type EdgeDefinition,
  type NodeDataDefinition,
  type NodeDefinition,
} from "cytoscape";
import { z } from "zod";

export const TopicNodeDataSchema = z
  .object({
    id: z.string(),
    label: z.string(),
    nodeType: z.literal("topic"),
    tier: z.enum(["free", "premium"]),
    link: z.string().url(),
  })
  .strict();

export const VideoNodeDataSchema = z
  .object({
    id: z.string(),
    label: z.string(),
    parent: z.string(),
    nodeType: z.literal("video"),
    tier: z.enum(["free", "premium"]),
    type: z.enum([
      "overview",
      "definition",
      "theorem",
      "proof",
      "example",
      "exercise",
      "research",
      "3blue1brown",
    ]),
    authors: z.array(z.enum(["AInokoji", "3blue1brown", "saki", "kokomi"])),
    link: z.string().url(),
    tags: z.array(z.string()),
  })
  .strict();

export const BountyVideoNodeDataSchema = z
  .object({
    nodeType: z.literal("bounty"),
    bounty: z.number(),
  })
  .strict();

export const PrerequisiteEdgeDataSchema = z
  .object({
    target: z.string(),
    source: z.string(),
    type: z.enum(["main", "supporting", "invisible"]),
    importance: z.union([z.literal(1), z.literal(2), z.literal(3)]),
    message: z.string(),
  })
  .strict();

export const VideoNodeSchema = z.object({
  group: z.literal("nodes"),
  data: z.discriminatedUnion("nodeType", [
    TopicNodeDataSchema,
    VideoNodeDataSchema,
    BountyVideoNodeDataSchema,
  ]),
});

export const PrerequisiteEdgeSchema = z.object({
  group: z.literal("edges"),
  data: PrerequisiteEdgeDataSchema,
});

export const ElementSchema = z.discriminatedUnion("group", [
  VideoNodeSchema,
  PrerequisiteEdgeSchema,
]);

export type TopicNodeDataDefinition = z.infer<typeof TopicNodeDataSchema> &
  NodeDataDefinition;

export type VideoNodeDataDefinition = z.infer<typeof VideoNodeDataSchema> &
  NodeDataDefinition;

export type BountyVideoNodeDataDefinition = z.infer<
  typeof BountyVideoNodeDataSchema
> &
  NodeDataDefinition;

export type PrerequisiteEdgeDataDefinition = z.infer<
  typeof PrerequisiteEdgeDataSchema
> &
  EdgeDataDefinition;

export type VideoNodeDefinition = z.infer<typeof VideoNodeSchema> &
  NodeDefinition;

export type PrerequisiteEdgeDefinition = z.infer<
  typeof PrerequisiteEdgeSchema
> &
  EdgeDefinition;

export type ElementDefinition = z.infer<typeof ElementSchema>;

export type ElementDefinitionList = ElementDefinition[];
