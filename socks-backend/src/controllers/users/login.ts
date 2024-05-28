import { RequestHandler } from 'express'

interface Login {
  userName: string;
  password: string;
}

/**
 * User login
 */
const postLogin : RequestHandler = (req, res) => {
  const user = req.body as Login
  if (user.userName !== 'admin' || user.password !== 'secret') {
    res.status(400).json({msg: 'Incorrect login/pwd (use: admin/secret)'})
    return
  }

  res.json({token: ''})
}

export default postLogin
