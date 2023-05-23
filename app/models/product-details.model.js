import mongoose, { Schema } from "mongoose";

const ProductDetailsSchema = mongoose.Schema({
  categoryId: { type: Schema.Types.ObjectId },
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  color: { type: String },
  size: { type: String },
  material: { type: String },
  brand: { type: String },
  weight: { type: Number },
  availability: { type: Boolean },
  image: { type: String },
  launchDate: { type: String },
});

export default mongoose.model("product-details", ProductDetailsSchema);
