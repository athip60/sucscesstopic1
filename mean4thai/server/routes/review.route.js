const express = require('express');
const asyncHandler = require('express-async-handler');
const reviewCtrl = require('../controllers/review.controller');

const router = express.Router();
module.exports = router;

//router.use(passport.authenticate('jwt', { session: false }))

router.route('/').post(asyncHandler(insert));
router.route('/get/:_id').get(asyncHandler(get));
router.route('/all').get(asyncHandler(getAll));
router.route('/search').get(asyncHandler(search));
router.route('/delete/:_id').delete(asyncHandler(deleteData));
router.route('/update/:_id').put(asyncHandler(updateData));


async function insert(req, res) {
  let review = await reviewCtrl.insert(req.body);
  res.json(review);
}

async function get(req, res) {
  let all_reviews = await reviewCtrl.get(req.params['_id']);
  res.json(all_reviews);
}

async function getAll(req, res) {
  let all_reviews = await reviewCtrl.getAll();
  res.json(all_reviews);
}

async function search(req, res) {
  let result = await reviewCtrl.search(req.params['key'], req.params['value']);
  res.json(result);
}

async function deleteData(req, res) {
  let all_reviews = await reviewCtrl.deleteData(req.params['_id']);
  res.json(all_reviews);
}

async function updateData(req, res) {
  let all_reviews = await reviewCtrl.updateData(req.params['_id'],req.body);
  res.json(all_reviews);
}

