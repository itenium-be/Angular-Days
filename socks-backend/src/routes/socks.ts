import express from 'express'
import getSocks, { getSock, getLatestSocks } from '../controllers/socks/getSocks'
import getReviews, { getLatestReviews } from '../controllers/socks/getReviews'
import { deleteSocks, postSocks, putSocks, buySocks } from '../controllers/socks/updateSocks'
import { postReview } from '../controllers/socks/updateReviews'

const socks = express.Router()

socks.post('/buy', buySocks)
socks.get('/latest', getLatestSocks)
socks.get('/:id', getSock)
socks.get('/', getSocks)
socks.post('/', postSocks)
socks.put('/', putSocks)
socks.delete('/:id', deleteSocks)

socks.post('/reviews', postReview)
socks.get('/reviews/latest', getLatestReviews)
socks.get('/reviews/:sockId', getReviews)

export default socks
