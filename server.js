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
app.use((req, res, next) => {
	if (req.method === "POST" && req.path === "/login") {
		if (req.body.login === "admin" && req.body.password === "admin") {
			console.log("toto");

			console.log("req");
			console.log(req.body);
			const token = jwt.sign(data, key);
			console.log("token");
			console.log(token);
			const theSecretRevealed = jwt.verify(token, key);
console.log("theSecretRevealed");
console.log(theSecretRevealed);

			res.status(200).json({ token });
			next();
		} else {
			console.log("tata");
			res.status(400).json({ message: " wrong password" });
		}
	} else {
		next();
	}
});
app.get("/", (req, res) => {
	console.log("log");
	res.send("coucou");
});
app.post("/", (req, res) => {
	console.log("req");

	console.log(req.body);
});
app.use(function (req, res, next) {
	console.log("Time:", Date.now());
	next();
});
app.post("/login", (req, res) => {});
app.listen(3001, () => {
	console.log("connécté");
});

// const theSecretRevealed = jwt.verify(token, key);
// console.log("theSecretRevealed");
// console.log(theSecretRevealed);
