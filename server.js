const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();



// const { createServer } = require("http");
// const { Server } = require("socket.io");

// const httpServer = createServer(app);
// const io = new Server(httpServer, { /* options */ });

// io.on("connection", (socket) => {
//   // ...
//   console.log("connexion");
//   console.log("avec l'id" + socket.id);
// socket.on('username',(user)=>{
// 	console.log(user +" s'est connecté");
// 	io.emit('newConnection',user)
	
// })
//   socket.on('disconnect',()=>{
// 	  console.log("deconnecté");
//   })
// });







// let mysql = require("mysql");
// let con = mysql.createConnection({
// 	host: "localhost",
// 	user: "root",
// 	password: "",
// 	database: "api",
// });
// con.connect(function (err) {
// 	if (err) throw err;
// 	console.log("connected!!");
// 	con.query("SELECT * FROM etalonnages", function (err, result) {
// 		if (err) throw err;
// 		// result.forEach((element) => {
// 		// 	console.log(element);
// 		// });
// 		// console.log(Object.keys(result));
// 		console.log(result[0]);
// 		console.log(JSON.parse(result[0].ptsEtalonnage));
// 		console.log(result.length);
// 	});
// });

const jwt = require("jsonwebtoken");

const key = "MuchSecretVerySecureSoSafe";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use((req, res, next) => {
// 	console.log("middleware Loggin test");
// 	next();
// });
app.use((req, res, next) => {
	if (req.method === "POST" && req.path === "/login") {
		if (req.body.login === "admin" && req.body.password === "admin") {
			const data = { user: "ludovic vachon" };

			const token = jwt.sign({ data, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 }, key); //1jour
			console.log("token");
			console.log(token);
			// const theSecretRevealed = jwt.verify(token, key);
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
app.get("/api/user", (req, res) => {
	const token = req.header("x-auth-token");
	try {
		const theSecretRevealed = jwt.verify(token, key);
		res.send({ test: "authentification réussie !" });
	} catch (err) {
		console.log("err");
		console.log(err);
		res.send({ test: "token périmé !" });
	}
});
app.post("/", (req, res) => {
	console.log("req");

	console.log(req.body);
});
app.use(function (req, res, next) {
	console.log("Time:", Date.now());
	next();
});
// app.post("/login", (req, res) => {});
// app.listen(3001, () => {
// 	console.log("connécté");
// });
app.listen(3001);
// httpServer.listen(3001);
