const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;

app.use(cookieParser());
app.get("/auth", (req, res) => {
  if (typeof req.cookies.isLoggedIn === "undefined") {
    res.status(401).send("Unauthorized");
  } else {
    res.status(200).send("Hello World!");
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
