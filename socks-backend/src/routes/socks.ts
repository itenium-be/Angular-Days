import express from 'express'
import getSocks, { getLatestSocks } from '../controllers/socks/getSocks'

const socks = express.Router()

socks.get('/', getSocks)
socks.get('/latest', getLatestSocks)

export default socks
