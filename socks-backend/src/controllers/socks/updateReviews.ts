import { RequestHandler } from "express";
import { reviewsDb } from "../../db/db";

export const postReview: RequestHandler = async (req, res) => {
  const review = req.body
  review.added = new Date();
  review.email = 'sock-lover@itenium.be';
  await reviewsDb.push('/reviews', [review], false)
  res.status(200).json({msg: 'Review added!'});
}
