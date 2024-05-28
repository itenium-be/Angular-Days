import express from 'express'
import getSocks from '../controllers/socks/getSocks'

const socks = express.Router()

socks.get('/', getSocks)

export default socks
