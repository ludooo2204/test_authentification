module.exports = (req, res, next) => {
	if (req.method === "POST" && req.path === "/login") {
		if (req.body.login === "admin" && req.body.password === "admin") {
			res.status(200).json({ token: "abcdef" });
		} else {
			res.status(400).json({ message: " wrong password" });
		}
	} else {
		next();
	}
};
