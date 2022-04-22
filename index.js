const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const DBConnection = require("./config/db");
dotenv.config({ path: "./config/.env" });
const User = require("./modals/schema");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

DBConnection();

app.use("/", express.static(path.join(__dirname, "main")));
app.use("/signup", express.static(path.join(__dirname, "static")));
app.use("/catalog", express.static(path.join(__dirname, "public")));

//PORT
const PORT = process.env.PORT || 5500;

app.post("/register", async (req, res) => {
  const { password, email } = req.body;

  if (!password || !email) {
    return res.redirect("/");
    // return res
    //   .status(422)
    //   .json({ success: "false", error: "Something Missing" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      // return res.status(422).json({ success: "false", error: "Email Exist" });
      return res.redirect("/");
    } else {
      const user = new User({
        email,
        password,
      });

      await user.save();
      res.redirect("/catalog");
      // res.status(201).json({ sucess: true, msg: "Successful" });
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  console.log(password + " " + email);

  if (!password || !email) {
    return res.redirect("/");
    // return res
    //   .status(422)
    //   .json({ sucess: "false", error: "Something Missing" });
  }

  try {
    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      if (userLogin.password !== password) {
        return res.redirect("/");
        // return res
        //   .status(400)
        //   .json({ sucess: "false", msg: "Invalid Credential No User" });
      } else {
        return res.redirect("/catalog");
        // return res
        //   .status(200)
        //   .json({ sucess: true, msg: `Welcoms ${userLogin.email}` });
      }
    } else {
      // alert("Invalid Credential No User");
      return res.redirect("/");
      // return res.status(400).json({
      //   sucess: "false",
      //   msg: "Invalid Credential No User",
      // });
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Your Port at : ${PORT}`);
});
