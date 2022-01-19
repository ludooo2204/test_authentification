const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const jwt = require("jsonwebtoken");

const data = { some: "json" };
const key = "MuchSecretVerySecureSoSafe";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use("/login", (req, res, next) => {

// });
app.get("/", (req, res) => {
	console.log("log");
	res.send("coucou");
});
app.post("/", (req, res) => {
	console.log("req");

	console.log(req.body);
});
app.post("/login", (req, res) => {

	
	console.log("req");
	console.log("req");
	console.log("req");

	console.log(req.body);
	const token = jwt.sign(data, key);
	console.log("token");
	console.log(token);
});
app.listen(3001, () => {
	console.log("connécté");
});

// const theSecretRevealed = jwt.verify(token, key);
// console.log("theSecretRevealed");
// console.log(theSecretRevealed);
