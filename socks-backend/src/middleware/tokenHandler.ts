import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null)
    return res.sendStatus(401)

  jwt.verify(token, process.env.TOKEN_SECRET!, (err: any, user: any) => {
    if (err) {
      console.log('err', err)
      return res.sendStatus(403)
    }

    console.log('logging in', user);
    (req as any).user = user
    next()
  })
}
