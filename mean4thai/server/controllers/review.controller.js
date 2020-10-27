const Joi = require("joi");
const Review = require("../models/review.model");

const reviewSchema = Joi.object({
  // sid: Joi.number().integer().required(),
  user_id: Joi.string().required(),
  user_name: Joi.string().required(),
  catagory: Joi.string().required(),
  namemovie: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
});

module.exports = {
  insert,
  get,
  getAll,
  search,
  deleteData,
  updateData,
};

async function insert(review) {
  review = await Joi.validate(review, reviewSchema, { abortEarly: false });
  return await new Review(review).save();
}
/**
 * อ่านเพิ่มเติม https://mongoosejs.com/docs/api.html
 */
async function get(_id) {
  return await Review.find({ _id: _id });
}

async function getAll() {
  return await Review.find();
}

async function search(key, value) {
  let query = {};
  query[key] = value;
  return await Review.find(query);
}

async function deleteData(_id) {
  return await Review.findByIdAndDelete(_id);
}

async function updateData(_id,data) {
  return Review.findByIdAndUpdate(_id, data);
}
