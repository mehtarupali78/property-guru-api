import productDetails from "../models/product-details.model.js";

export default {
  async findAll(req, res) {
    try {
      const { category, name } = req.query;
      let params = {};
      if (category && category.length) {
        params = { ...params, categoryId: category };
      }

      if (name && name.length) {
        var regex = new RegExp([, name].join(""), "i");
        params = {
          ...params,
          name: regex,
          name: { $regex: regex },
        };
      }
      const productDetailsRes = await productDetails.find(params);
      res.send({ message: "SUCCESS", data: productDetailsRes });
    } catch (err) {
      console.log("return error", err);
      return res.status(500).send(error);
    }
  },

  async getProductDetailsById(req, res) {
    try {
      const response = await productDetails.find({ _id: req.body.id });
      res.send({ message: "SUCCESS", data: response });
    } catch (err) {
      console.log("return error", err);
      return res.status(500).send(error);
    }
  },
};
