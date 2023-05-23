import express from "express";
import productCategoryController from "../controllers/product-categorys.controller.js";

export const productCategoryRouter = express.Router();

productCategoryRouter.route("/all").get(productCategoryController.findAll);
