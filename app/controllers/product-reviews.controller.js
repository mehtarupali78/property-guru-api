import productReviews from "../models/product-reviews.model.js";

export default {
  async fetchReviewsByProductId(req, res) {
    try {
      const productReviewRes = await productReviews.find({
        productId: req.query.id,
      });
      res.send({ message: "SUCCESS", data: productReviewRes });
    } catch (err) {
      console.log("return error", err);
      return res.status(500).send(error);
    }
  },
};
