import express from 'express'
import getSocks, { getSock, getLatestSocks } from '../controllers/socks/getSocks'
import getReviews, { getLatestReviews } from '../controllers/socks/getReviews'
import { deleteSocks, postSocks, putSocks } from '../controllers/socks/updateSocks'

const socks = express.Router()

socks.get('/latest', getLatestSocks)
socks.get('/:id', getSock)
socks.get('/', getSocks)
socks.post('/', postSocks)
socks.put('/', putSocks)
socks.delete('/:id', deleteSocks)

socks.get('/reviews/latest', getLatestReviews)
socks.get('/reviews', getReviews)

export default socks
