import { RequestHandler } from 'express'
import { socksDb } from '../../db/db'

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const getSocks: RequestHandler = async (_req, res) => {
  // await sleep(300)
  const socks = await socksDb.getData('/socks')
  res.status(200).json(socks);
}


export const getSock: RequestHandler = async (req, res) => {
  const sockId = +req.params.id
  const socks = await socksDb.getData('/socks')
  const sock = socks.find((s: any) => s.id === sockId)
  res.status(200).json(sock);
}


export const getLatestSocks: RequestHandler = async (_req, res) => {
  const socks = await socksDb.getData('/socks')
  const latestSocks = socks.slice(0, 8)
  res.status(200).json(latestSocks);
}

export default getSocks
