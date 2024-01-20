const mongoose = require("mongoose");
const accountSchema = new mongoose.Schema({
  username: String,
  accountId: Number,
  balance: Number,
});
const Account = mongoose.model("Account", accountSchema);
module.exports = Account;