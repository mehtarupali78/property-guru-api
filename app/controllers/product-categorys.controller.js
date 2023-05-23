import productCategorys from "../models/product-categorys.model.js";

export default {
  async findAll(req, res) {
    try {
      console.log("fdgvdgfdgdfsgdffgdhg", process.env.USERNAME);
      const productCategoryRes = await productCategorys.find();
      res.send({ message: "SUCCESS", data: productCategoryRes });
    } catch (err) {
      console.log("return error", err);
      return res.status(500).send(error);
    }
  },
};
