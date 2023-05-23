import express from "express";
import productDetailsController from "../controllers/product-details.controller.js";

export const productDetailsRouter = express.Router();

productDetailsRouter.route("/all").get(productDetailsController.findAll);
