import express from "express";
import productReviewsController from "../controllers/product-reviews.controller.js";

export const productReviewsRouter = express.Router();

productReviewsRouter
  .route("/reviews")
  .get(productReviewsController.fetchReviewsByProductId);
