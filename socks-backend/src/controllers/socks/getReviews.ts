import { RequestHandler } from 'express'
import { reviewsDb } from '../../db/db'

const getReviews: RequestHandler = async (_req, res) => {
  const reviews = await reviewsDb.getData('/reviews')
  res.status(200).json(reviews);
}

export const getLatestReviews: RequestHandler = async (_req, res) => {
  const reviews = await reviewsDb.getData('/reviews')
  const latestReviews = reviews.slice(0, 3)
  res.status(200).json(latestReviews);
}

export default getReviews
