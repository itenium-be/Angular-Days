import { JsonDB, Config } from 'node-json-db'

const dbConfig = new Config('./db/socks.json', true, true, '/');
export const socksDb = new JsonDB(dbConfig);
