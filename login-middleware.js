module.exports = (req, res, next) => {
	console.log("titi");
	if (req.method === "POST" && req.path === "/login") {
		if (req.body.login === "admin" && req.body.password === "admin") {
			console.log("toto");
			res.status(200).json({ token: "abcdef" });
		} else {
			console.log("tata");
			res.status(400).json({ message: " wrong password" });
		}
	} else {
		next();
	}
};
