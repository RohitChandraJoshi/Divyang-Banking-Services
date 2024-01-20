require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const bcrypt = require("bcrypt");
const AccountDB = require("./createAccount");

const cors = require("cors");
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const User = require("./user");
const Account = require("./account");

app.use(express.static("public"));
app.use(express.static("client/my-app/build"));

app.use(cors());
const PORT = process.env.PORT || 3000; 

app.post("/sign_up", async (req, res) => {
  console.log(req.body);
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  console.log(username);

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    username: username,
    email: email,
    password: hashedPassword,
  });
  user.save();
  res.redirect("https://divyang-banking-services.netlify.app//login");
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const foundUser = await User.findOne({
    username: username,
  });

  if (foundUser) {
    const isPasswordValid = await bcrypt.compare(password, foundUser.password);

    console.log(isPasswordValid);
    console.log(foundUser.password);
    if (isPasswordValid) {
      res.redirect(`https://divyang-banking-services.netlify.app//dashboard/${foundUser.username}`);
    } else console.log("Incorrect password");
  } else console.log("Error!");
});

app.get("/transfer/:username", async function (req, res) {
  const accountInfo = await AccountDB(req.params.username);
});

app.post("/transfer/:username", async function (req, res) {
  console.log(req.body);
  const { balance, accountId } = await AccountDB(req.params.username);
  const currentUser = req.params.username;
  const amountTransfer = +req.body.amount;
  console.log(amountTransfer);
  //Updating current user: transferring

  if (balance >= amountTransfer) {
    const filter = {
      username: currentUser,
    };
    const update = {
      $set: {
        balance: balance - amountTransfer,
      },
    };

    await Account.findOneAndUpdate(filter, update, { returnOriginal: false });

    //Updating account who is transferred money to
    const getInfo = await AccountDB(req.body.username);
    await Account.findOneAndUpdate(
      { username: req.body.username },
      { $set: { balance: getInfo.balance + amountTransfer } },
      { returnOriginal: false }
    );
    res.json({ message: "Success" });
  } else {
    res.json({ message: "Insufficient funds" });
  }
});

app.get("/account/:username", async function (req, res) {
  const accountInfo = await AccountDB(req.params.username);
  return res.json(accountInfo);
});

  app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
  });