import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import errorHandler from './middleware/errorHandler';
import fourOhFour from './middleware/fourOhFour';
import hello from './routes/hello';
import users from './routes/users';
import socks from './routes/socks';

const app = express()

// Apply most middleware first
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(cors({ origin: '*' }))

app.use(helmet())
app.use(morgan('tiny'))

// Apply routes before error handling
app.use('/', hello)
app.use('/users', users)
app.use('/socks', socks)

// Apply error handling last
app.use(fourOhFour)
app.use(errorHandler)

export default app
