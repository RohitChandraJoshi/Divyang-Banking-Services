const Account = require("./account");

function generateAccountId() {
  const min = 1000000;
  const max = 9999999
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function AccountDB(username) {
  const generatedAccountId = generateAccountId()
  const account = new Account({
    username: username,
    accountId: generatedAccountId,
    balance: 100,
  });
  const findUser = await Account.findOne({ username: username });
  if (findUser) {
    return { balance: findUser.balance, accountId: findUser.accountId };
    //
  } else account.save();
  return { balance: 100, accountId: generatedAccountId};
}

module.exports = AccountDB;
