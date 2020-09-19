const mongoose = require("mongoose");

const Loan = mongoose.model(
  "Loan",
  new mongoose.Schema({
    price: String,
    name: String,
    status: String,
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  })
);

module.exports = Loan;
