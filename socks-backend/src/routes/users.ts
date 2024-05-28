import express from 'express'
import login from '../controllers/users/login'

const users = express.Router()

users.post('/', login)

export default users
