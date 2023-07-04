const mongoose = require("mongoose");
const Schema = mongoose.Schema
const transactionSchema = new Schema({
  fromAccount: { type: String, required: true },
  toAccount: { type: String, required: true },
  value: { type: Number, required: true },
  hash: { type: String, required: true },
});
module.exports = mongoose.model("Transaction", transactionSchema);