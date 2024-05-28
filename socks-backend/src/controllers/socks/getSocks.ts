import { RequestHandler } from 'express'
import { socksDb } from '../../db/db'

const getSocks: RequestHandler = async (_req, res) => {
  const socks = await socksDb.getData('/socks')
  res.status(200).json(socks);
}


export const getLatestSocks: RequestHandler = async (_req, res) => {
  const socks = await socksDb.getData('/socks')
  const latestSocks = socks.slice(0, 8)
  res.status(200).json(latestSocks);
}

export default getSocks
