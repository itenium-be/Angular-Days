import { RequestHandler } from 'express'
import jwt from 'jsonwebtoken'

interface Login {
  userName: string;
  password: string;
}


const postLogin : RequestHandler = (req, res) => {
  const user = req.body as Login
  if (user.userName !== 'admin' || !user.password.startsWith('secret')) {
    res.status(400).json({msg: 'Incorrect login/pwd (use: admin/secret)'})
    return
  }

  const jwtUser = {
    name: user.userName,
    permissions: ['admin']
  }

  if (user.password !== 'secret') {
    jwtUser.permissions.push('super-admin')
  }

  const token = jwt.sign(jwtUser, process.env.TOKEN_SECRET!, { expiresIn: '5 hours' });
  res.json({token})
}

export default postLogin
