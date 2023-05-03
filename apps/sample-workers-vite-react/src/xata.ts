// Generated by Xata Codegen 0.21.0. Please do not edit.
import { buildClient, buildWorkerRunner } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "Users",
    columns: [
      { name: "name", type: "string" },
      { name: "email", type: "email" },
      { name: "bio", type: "text" },
    ],
  },
  {
    name: "Posts",
    columns: [
      { name: "title", type: "string" },
      { name: "labels", type: "multiple" },
      { name: "slug", type: "string" },
      { name: "text", type: "text" },
      { name: "author", type: "link", link: { table: "Users" } },
      { name: "createdAt", type: "datetime" },
      { name: "views", type: "int" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Users = InferredTypes["Users"];
export type UsersRecord = Users & XataRecord;

export type Posts = InferredTypes["Posts"];
export type PostsRecord = Posts & XataRecord;

export type DatabaseSchema = {
  Users: UsersRecord;
  Posts: PostsRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: "https://sample-databases-v0sn1n.eu-west-1.xata.sh/db/demo",
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

export const xataWorker = buildWorkerRunner<XataClient>({
  workspace: "sample-databases-v0sn1n",
  worker: "ce4akdcr1pphuipq6g7g",
});