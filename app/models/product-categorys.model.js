import mongoose, { Schema } from "mongoose";

const ProductCategorySchema = mongoose.Schema({
  name: { type: String },
  description: { type: String },
});

export default mongoose.model("product-categorys", ProductCategorySchema);
