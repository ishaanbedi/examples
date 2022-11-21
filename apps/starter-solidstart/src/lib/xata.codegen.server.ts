// Generated by Xata Codegen 0.21.0. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "solid_with_xata_example",
    columns: [
      { name: "title", type: "string" },
      { name: "description", type: "string" },
      { name: "url", type: "string" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type SolidWithXataExample = InferredTypes["solid_with_xata_example"];
export type SolidWithXataExampleRecord = SolidWithXataExample & XataRecord;

export type DatabaseSchema = {
  solid_with_xata_example: SolidWithXataExampleRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: "https://demos-urucbe.us-east-1.xata.sh/db/starter-solidstart",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
