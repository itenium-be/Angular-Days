import { JsonDB, Config } from 'node-json-db'

const socksConfig = new Config('./db/socks.json', true, true, '/');
export const socksDb = new JsonDB(socksConfig);

const reviewsConfig = new Config('./db/reviews.json', true, true, '/');
export const reviewsDb = new JsonDB(reviewsConfig);
