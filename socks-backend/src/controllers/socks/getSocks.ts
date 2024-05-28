import { RequestHandler } from 'express'
import { socksDb } from '../../db/db'

const getSocks: RequestHandler = async (_req, res) => {
  const socks = await socksDb.getData('/socks')
  res.status(200).json(socks);
}

export default getSocks
