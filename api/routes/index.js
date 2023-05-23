import express from "express";
import { productCategoryRouter } from "./product-categorys.routes.js";
import { productDetailsRouter } from "./product-details.routes.js";
import { productReviewsRouter } from "./product-reviews.routes.js";

export const restRouter = express.Router();

restRouter.use("/product-category", productCategoryRouter);
restRouter.use("/products", productDetailsRouter);
restRouter.use("/product-review", productReviewsRouter);

// http://localhost:3000/api/productcategory/all
