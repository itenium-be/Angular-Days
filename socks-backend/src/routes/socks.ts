import express from 'express'
import getSocks, { getLatestSocks } from '../controllers/socks/getSocks'
import getReviews, { getLatestReviews } from '../controllers/socks/getReviews'

const socks = express.Router()

socks.get('/', getSocks)
socks.get('/latest', getLatestSocks)

socks.get('/reviews', getReviews)
socks.get('/reviews/latest', getLatestReviews)

export default socks
