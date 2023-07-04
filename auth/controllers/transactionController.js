const Transaction = require('../models/Transaction');
const mongoose = require("mongoose");
const asyncErrorHandler = require('../middlewares/helpers/asyncErrorHandler');

exports.savedTransaction = asyncErrorHandler(async (req, res, next) => {
  console.log("req.body",req.body)
  const { from, to, value, hash } = req.body;
  const newTransaction = new Transaction({
    fromAccount: from,
    toAccount: to,
    value: value,
    hash: hash,
  });
  await newTransaction.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});