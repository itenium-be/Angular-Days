import { RequestHandler } from 'express'
import { reviewsDb } from '../../db/db'

const getReviews: RequestHandler = async (req, res) => {
  const sockId = +req.params.sockId
  const reviews = await reviewsDb.getData('/reviews')
  const sockReviews = reviews.filter((review: any) => review.socksId === sockId)
  res.status(200).json(sockReviews);
}

export const getLatestReviews: RequestHandler = async (_req, res) => {
  const reviews = await reviewsDb.getData('/reviews')
  const latestReviews = reviews.slice(0, 3)
  res.status(200).json(latestReviews);
}

export default getReviews
