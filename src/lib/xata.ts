import { buildClient } from "@xata.io/client";

const apiKey: string = process.env.XATA_API_KEY as string;
const databaseURL: string = process.env.XATA_DATABASE_URL as string;

export const xata = buildClient({
  apiKey,
  databaseURL,
});
