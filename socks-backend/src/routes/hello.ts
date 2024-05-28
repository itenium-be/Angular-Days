import express from 'express'
import getHello from '../controllers/hello/getHello'

const hello = express.Router()

hello.get('/', getHello)

export default hello
