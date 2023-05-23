import mongoose, { Schema } from "mongoose";

const ProductReviewsSchema = mongoose.Schema({
  productId: { type: Schema.Types.ObjectId },
  rating: { type: Number },
  title: { type: String },
  description: { type: String },
  author: { type: String },
  date: { type: String },
});

export default mongoose.model("product-reviews", ProductReviewsSchema);
