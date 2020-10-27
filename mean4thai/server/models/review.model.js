const mongoose = require("mongoose");

/**
 * อ่านเพิ่มเติม https://mongoosejs.com/docs/guide.html
 */
const ReviewSchema = new mongoose.Schema(
  {
    user_id: { type: String, required: true },
    user_name: { type: String, required: true },
    catagory: { type: String, required: true },
    namemovie: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Review", ReviewSchema);
